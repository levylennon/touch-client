import { RootStore } from '@lindo/shared'
import { logger } from '../logger'
import { I18n } from '../utils'
import { GITHUB_OWNER, GITHUB_REPO } from '../constants'
import { Octokit } from '@octokit/rest'
import compareVersions from 'compare-versions'
import { readFileSync } from 'fs'
import { join } from 'path'

export class AppUpdater {
  private readonly _rootStore: RootStore
  private readonly _octokit: Octokit
  private readonly _i18n: I18n

  private constructor(rootStore: RootStore, i18n: I18n) {
    this._rootStore = rootStore
    this._octokit = new Octokit()
    this._i18n = i18n
  }

  static async init(rootStore: RootStore, i18n: I18n): Promise<AppUpdater> {
    return new AppUpdater(rootStore, i18n)
  }

  async run() {
    try {
      // Get current version from package.json
      const packageJson = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf-8'))
      const currentVersion = packageJson.version
      this._rootStore.appStore.setLindoVersion(currentVersion)

      logger.info('appUpdater -> Start app update checking...')
      
      // Check for updates via GitHub API
      const { data: latestRelease } = await this._octokit.repos.getLatestRelease({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO
      })

      const latestVersion = latestRelease.tag_name.replace('v', '')
      
      if (compareVersions(latestVersion, currentVersion) > 0) {
        logger.info(`appUpdater -> Update available: ${latestVersion}`)
        // In web version, user would need to manually update
        // Could show a notification or banner
      } else {
        logger.info('appUpdater -> App is up to date')
      }
    } catch (error) {
      logger.error('Error checking for app updates:', error)
    }
  }
}
