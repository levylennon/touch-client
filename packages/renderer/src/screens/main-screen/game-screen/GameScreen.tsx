import { DofusWindow, HTMLIFrameElementWithDofus } from '@/dofus-window'
import { useGameContext } from '@/providers'
import { useStores } from '@/store'
import { Game } from '@/store/game-store/game'
import { useI18nContext } from '@lindo/i18n'
import { reaction } from 'mobx'
import React, { memo, useEffect, useRef } from 'react'
import { useGameManager } from './use-game-manager'

declare global {
  interface Window {
    $gameWindows: DofusWindow[]
    $game_id: string
    $current_id: string
    $appSchemeLinkCalled: any
  }
}

export interface GameScreenProps {
  game: Game
  currentId: any
}

// eslint-disable-next-line react/display-name
export const GameScreen = memo(({ game, currentId: getCurrentId }: GameScreenProps) => {
  const gameContext = useGameContext()
  const rootStore = useStores()
  const { LL } = useI18nContext()
  const gameManager = useGameManager({
    game,
    rootStore,
    LL
  })
  const iframeGameRef = useRef<HTMLIFrameElementWithDofus>(null)
  const currentId = getCurrentId()

  useEffect(() => {
    return reaction(
      () => rootStore.gameStore.selectedGame,
      (selectedGame) => {
        if (selectedGame?.id === game.id) {
          setTimeout(() => {
            iframeGameRef.current?.focus()
          }, 100)
        }
      },
      { fireImmediately: true }
    )
  }, [])

  // function to generate random string
  const makeid = (length: number) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
      counter += 1
    }
    return result
  }

  const handleLoad = () => {
    if (iframeGameRef.current) {
      const gameWindow = iframeGameRef.current.contentWindow

      // only for debug purpose
      gameWindow.findSingleton = (searchKey: string, window: DofusWindow) => {
        const singletons = Object.values(window.singletons.c)

        const results = singletons.filter(({ exports }) => {
          if (!!exports.prototype && searchKey in exports.prototype) {
            return true
          } else if (searchKey in exports) {
            return true
          } else return false
        })

        if (results.length > 1) {
          window.lindoAPI.logger.error(
            `[MG] Singleton searcher found multiple results for key "${searchKey}". Returning all of them.`
          )()
          return results
        }

        return results.pop()
      }

      // can't use SQL Database in modern iframe
      gameWindow.openDatabase = undefined
      gameWindow.initDofus(() => {
        window.lindoAPI.logger.info('initDofus done')()
        gameManager.init(gameWindow)

        if (!window.parent.$gameWindows) {
          window.parent.$gameWindows = []
        }
        gameWindow.$game_id = game.id
        window.parent.$current_id = currentId
        window.parent.$gameWindows.push(gameWindow)
        const _current = window.parent.$gameWindows.filter((game) => game.$game_id === getCurrentId())[0]
        _current.localStorage.removeItem('HAAPI_KEY')
        _current.localStorage.removeItem('UNIQUE_NICKNAME')
        _current.localStorage.removeItem('HAAPI_REFRESH_TOKEN')
        _current.localStorage.removeItem('CODE_VERIFIER')
        _current.localStorage.removeItem('HAAPI_KEY_TIMEOUT')
        if (!window.parent.$appSchemeLinkCalled) {
          window.parent.$appSchemeLinkCalled = function (code: string) {
            const current = window.parent.$gameWindows.filter((game) => game.$game_id === getCurrentId())[0]

            // @ts-ignore
            if (current != null) {
              current.$_authManager.requestWebAuthToken(code, (_: any, accessKey: string, refreshKey: string) =>
                current.gui.loginScreen._login({
                  accessKey,
                  refreshKey,
                  save: true
                })
              )
            }
          }
        }
      })
    }
  }

  return (
    <iframe
      id={`iframe-game-${makeid(10)}`}
      ref={iframeGameRef}
      onLoad={handleLoad}
      style={{ border: 'none', width: '100%', height: '100%' }}
      // src={gameContext.gameSrc}
      src={gameContext.gameSrc + '?id=' + game.id}
    />
  )
})
