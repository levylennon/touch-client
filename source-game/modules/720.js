function(e, t, i) {
    var n = i(721);
    n.shadersData = {
        vertexLine: {
            type: "vertex",
            script: "precision mediump float;attribute vec2 aPosition;attribute vec2 aNormal;attribute vec4 aColorAdd;uniform mat4 uMatrix;varying vec4 vColor;varying vec2 v_normal;void main() {\tvec4 tx = uMatrix[0];\tvec4 ty = uMatrix[1];\tvec4 cm = uMatrix[2];\tvec4 ca = uMatrix[3];\tvec4 colorMul = vec4(0.5) * cm * 2.0;\tvec4 colorAdd = aColorAdd * cm + ca;\tvColor = colorMul + colorAdd;\tvColor.rgb *= colorMul.a;\tv_normal = aNormal;\tgl_Position = vec4(\t\taPosition.x * tx.x + aPosition.y * tx.y + tx.z,\t\taPosition.x * ty.x + aPosition.y * ty.y + ty.z,\t\t0.0, 1.0\t);}"
        },
        fragmentLine: {
            type: "fragment",
            script: "precision mediump float;varying mediump vec4 vColor;varying vec2 v_normal;uniform float uStrength;void main() {\tfloat value = v_normal.x * v_normal.x + v_normal.y * v_normal.y;\tfloat alpha = 1. - smoothstep(0., uStrength,  value);\tgl_FragColor = vColor * alpha;}"
        },
        vertexBox: {
            type: "vertex",
            script: "attribute vec2 aPosition;attribute vec4 aColorMul;attribute vec4 aColorAdd;uniform   mat4 uMatrix;varying mediump vec4 vColor;void main() {\tvec4 tx = uMatrix[0];\tvec4 ty = uMatrix[1];\tvec4 cm = uMatrix[2];\tvec4 ca = uMatrix[3];\tvec4 colorMul = aColorMul * cm * 2.0;\tvec4 colorAdd = aColorAdd * cm + ca;\tvColor = colorMul + colorAdd;\tvColor.rgb *= colorMul.a;\tgl_Position = vec4(\t\taPosition.x * tx.x + aPosition.y * tx.y + tx.z,\t\taPosition.x * ty.x + aPosition.y * ty.y + ty.z,\t\t0.0, 1.0\t);}"
        },
        fragmentBox: {
            type: "fragment",
            script: "varying mediump vec4 vColor;void main() {\tgl_FragColor = vColor;}"
        },
        vertexRegular: {
            type: "vertex",
            script: "attribute vec2 aPosition;attribute vec2 aTexCoord;attribute vec4 aColorMul;attribute vec4 aColorAdd;uniform   mat4 uMatrix;varying   vec2 vTexCoord;varying   vec4 vColorMul;varying   vec4 vColorAdd;void main() {\tvec4 tx = uMatrix[0];\tvec4 ty = uMatrix[1];\tvec4 cm = uMatrix[2];\tvec4 ca = uMatrix[3];\tvTexCoord = aTexCoord;\tvColorMul = aColorMul * cm * 2.0;\tvColorAdd = aColorAdd * cm + ca;\tvColorMul.rgb *= vColorMul.a;\tgl_Position = vec4(\t\taPosition.x * tx.x + aPosition.y * tx.y + tx.z,\t\taPosition.x * ty.x + aPosition.y * ty.y + ty.z,\t\t0.0, 1.0\t);}"
        },
        fragmentRegular: {
            type: "fragment",
            script: "varying mediump vec2 vTexCoord;varying mediump vec4 vColorMul;varying mediump vec4 vColorAdd;uniform sampler2D uTexture;void main() {\tmediump vec4 color = texture2D(uTexture, vTexCoord);\tmediump float colorAddAlpha = vColorAdd.a * color.a;\tcolor *= vColorMul;\tcolor.rgb /= color.a;\tcolor.rgb += vColorAdd.rgb;\tcolor.a += colorAddAlpha;\tcolor.rgb *= color.a;\tif (color.a == 0.0) { discard; }\tgl_FragColor = color;}"
        },
        vertexRelativeScale: {
            type: "vertex",
            script: "attribute vec2 aPosition;attribute vec2 aTexCoord;attribute vec4 aColorMul;attribute vec4 aColorAdd;uniform   mat4 uMatrix;varying   vec2 vTexCoord;varying   vec4 vColorMul;varying   vec4 vColorAdd;void main() {\tvec4 tx = uMatrix[0];\tvec4 ty = uMatrix[1];\tvec4 cm = uMatrix[2];\tvec4 ca = uMatrix[3];\tvTexCoord = aTexCoord;\tvColorMul = aColorMul * cm * 2.0;\tvColorAdd = ca;\tvColorMul.rgb *= vColorMul.a;\tfloat x = aPosition.x + tx.w * (aColorAdd.r * 127.0 + aColorAdd.g);\tfloat y = aPosition.y + ty.w * (aColorAdd.b * 127.0 + aColorAdd.a);\tgl_Position = vec4(\t\tx * tx.x + y * tx.y + tx.z,\t\tx * ty.x + y * ty.y + ty.z,\t\t0.0, 1.0\t);}"
        },
        vertexAbsoluteScale: {
            type: "vertex",
            script: "attribute vec2 aPosition;attribute vec2 aTexCoord;attribute vec4 aColorMul;attribute vec4 aColorAdd;uniform   mat4 uMatrix;varying   vec2 vTexCoord;varying   vec4 vColorMul;varying   vec4 vColorAdd;void main() {\tvec4 tx = uMatrix[0];\tvec4 ty = uMatrix[1];\tvec4 cm = uMatrix[2];\tvec4 ca = uMatrix[3];\tvTexCoord = aTexCoord;\tvColorMul = aColorMul * cm * 2.0;\tvColorAdd = ca;\tvColorMul.rgb *= vColorMul.a;\tgl_Position = vec4(\t\taPosition.x * tx.x + aPosition.y * tx.y + tx.z + tx.w * 127.0 * aColorAdd.r * aColorAdd.b,\t\taPosition.x * ty.x + aPosition.y * ty.y + ty.z - ty.w * 127.0 * aColorAdd.g * aColorAdd.a,\t\t0.0, 1.0\t);}"
        },
        vertexMask: {
            type: "vertex",
            script: "attribute vec2 aPosition;attribute vec2 aTexCoord;attribute vec4 aColorMul;attribute vec4 aColorAdd;uniform   mat4 uMatrix;uniform   vec4 uBbox;varying   vec2 vPosition;varying   vec2 vTexCoord;varying   vec4 vColorMul;varying   vec4 vColorAdd;void main() {\tvec4 tx = uMatrix[0];\tvec4 ty = uMatrix[1];\tvec4 cm = uMatrix[2];\tvec4 ca = uMatrix[3];\tvTexCoord = aTexCoord;\tvColorMul = aColorMul * cm * 2.0;\tvColorAdd = aColorAdd * cm + ca;\tvColorMul.rgb *= vColorMul.a;\tgl_Position = vec4(\t\taPosition.x * tx.x + aPosition.y * tx.y + tx.z,\t\taPosition.x * ty.x + aPosition.y * ty.y + ty.z,\t\t0.0, 1.0\t);\tvPosition = (aPosition - vec2(uBbox.x, uBbox.z)) / vec2(uBbox.y - uBbox.x, uBbox.w - uBbox.z);}"
        },
        fragmentMask: {
            type: "fragment",
            script: "varying mediump vec2 vPosition;varying mediump vec2 vTexCoord;varying mediump vec4 vColorMul;varying mediump vec4 vColorAdd;uniform sampler2D uTexture;uniform sampler2D uMask;void main() {\tmediump vec4 color = texture2D(uTexture, vTexCoord);\tmediump float colorAddAlpha = vColorAdd.a * color.a;\tcolor *= vColorMul;\tcolor.rgb /= color.a;\tcolor.rgb += vColorAdd.rgb;\tcolor.a += colorAddAlpha;\tcolor.rgb *= color.a;\tif (color.a <= 0.05) { discard; }\tmediump float mask = texture2D(uMask, vPosition).a;\tif (mask == 0.0) { discard; }\tif (mask <= 0.2) {\t\tcolor *= mask * 5.0;\t}\tgl_FragColor = color;}"
        },
        vertexOutline: {
            type: "vertex",
            script: "attribute vec2 aPosition;attribute vec2 aTexCoord;attribute vec4 aColorMul;attribute vec4 aColorAdd;uniform   mat4 uMatrix;varying   vec2 vTexCoord;varying   vec4 vColorOutline;void main() {\tvec4 tx = uMatrix[0];\tvec4 ty = uMatrix[1];\tvColorOutline = uMatrix[2] * aColorMul + aColorAdd;\tvTexCoord = aTexCoord;\tgl_Position = vec4(\t\taPosition.x * tx.x + aPosition.y * tx.y + tx.z,\t\taPosition.x * ty.x + aPosition.y * ty.y + ty.z,\t\t0.0, 1.0\t);}"
        },
        fragmentOutline: {
            type: "fragment",
            script: "precision mediump float;varying mediump vec2 vTexCoord;varying mediump vec4 vColorOutline;uniform sampler2D uTexture;void main() {\tvec4 color = texture2D(uTexture, vTexCoord);\tif (color.a == 1.0) {\t\tdiscard;\t} else {\t\tfloat gradX = texture2D(uTexture, vTexCoord + vec2(0.05, 0.0)).a - texture2D(uTexture, vTexCoord - vec2(0.05, 0.0)).a;\t\tfloat gradY = texture2D(uTexture, vTexCoord + vec2(0.0, 0.05)).a - texture2D(uTexture, vTexCoord - vec2(0.0, 0.05)).a;\t\tvec4 outlineColor = 0.5 * vColorOutline * (abs(gradX) + abs(gradY));\t\tgl_FragColor = outlineColor * outlineColor.a;\t}}"
        },
        fragmentFiltering: {
            type: "fragment",
            script: "precision mediump float;varying mediump vec2 vTexCoord;uniform float uRatio;uniform sampler2D uTexture;void main() {\tvec2 res = vec2(1267.0, 865.5);\tvec4 color  = texture2D(uTexture, vTexCoord);\tvec4 color1 = texture2D(uTexture, vTexCoord + vec2(-0.7, -0.7) / res);\tvec4 color2 = texture2D(uTexture, vTexCoord + vec2(-0.7,  0.7) / res);\tvec4 color3 = texture2D(uTexture, vTexCoord + vec2( 0.7, -0.7) / res);\tvec4 color4 = texture2D(uTexture, vTexCoord + vec2( 0.7,  0.7) / res);\tgl_FragColor = color * (1.0 + 4.0 * uRatio) - uRatio * (color1 + color2 + color3 + color4);}"
        },
        fragmentMapTransition: {
            type: "fragment",
            script: "precision mediump float;varying mediump vec2 vTexCoord;varying mediump vec4 vColorMul;uniform float uRatio;uniform sampler2D uTexture;void main() {\tvec2 offsetToCenter = vTexCoord - 0.5;\tfloat distToCenter = length(offsetToCenter);\tfloat c1 = 2.0 * (0.5 - distToCenter * pow(uRatio, 2.0) * 0.02);\tvec2 textureCoord = vec2(0.5 + c1 * offsetToCenter.x, 0.5 + c1 * offsetToCenter.y);\tvec4 color = texture2D(uTexture, textureCoord);\tfloat avg = (color.r + color.g + color.b) / 3.0;\tfloat greyRatio = uRatio * 1.0;\tvec4 greyedColor = color * (1.0 - greyRatio) + vec4(avg) * greyRatio;\tfloat blackRatio = uRatio * 0.2;\tgl_FragColor = vec4((greyedColor * (1.0 - blackRatio)).rgb, 1.0) * vColorMul;}"
        },
        fragmentPixelArt: {
            type: "fragment",
            script: "precision mediump float;varying mediump vec2 vTexCoord;uniform float uResolution;uniform sampler2D uTexture;void main() {\tvec4 color = texture2D(uTexture, floor(vTexCoord * uResolution) / uResolution);\tcolor.rgb = floor(color.rgb * 8.0) / 8.0;\tgl_FragColor = color;}"
        },
        fragmentEnteringFight: {
            type: "fragment",
            script: "precision mediump float;varying mediump vec2 vTexCoord;uniform float uRatio;uniform sampler2D uTexture;void main() {\tfloat u = 2.0 * (vTexCoord.x - 0.5);\tfloat v = 2.0 * (vTexCoord.y - 0.5);\tfloat r = uRatio * (pow(1.0 - max(abs(u), abs(v)), 2.0));\tvec2 uv = vTexCoord + vec2(u, v) * r;\tvec4 color = texture2D(uTexture, uv) + 0.8 * vec4(1.0, 1.0, 1.0, 0.0) * r;\tgl_FragColor = color;}"
        },
        fragmentColorSplit: {
            type: "fragment",
            script: "precision mediump float;varying mediump vec2 vTexCoord;uniform sampler2D uTexture;void main() {\tvec4 color = vec4(0.0, 0.0, 0.0, 1.0);\tcolor.r = texture2D(uTexture, vTexCoord + vec2(-0.007, - 0.007)).r;\tcolor.g = texture2D(uTexture, vTexCoord + vec2(0.007, - 0.007)).g;\tcolor.b = texture2D(uTexture, vTexCoord + vec2(0.0, 0.01)).b;\tgl_FragColor = color;}"
        }
    }
}
