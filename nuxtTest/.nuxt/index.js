import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_workbox_6f176f84 from 'nuxt_plugin_workbox_6f176f84' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_a2ed9440 from 'nuxt_plugin_nuxticons_a2ed9440' // Source: ./nuxt-icons.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_76a64410 from 'nuxt_plugin_cookieuniversalnuxt_76a64410' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_axios_afdb1730 from 'nuxt_plugin_axios_afdb1730' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_elementui_d905880e from 'nuxt_plugin_elementui_d905880e' // Source: ../plugins/element-ui (mode: 'all')
import nuxt_plugin_axios_5659d192 from 'nuxt_plugin_axios_5659d192' // Source: ../plugins/axios.js (mode: 'all')
import nuxt_plugin_request_e6dd6e04 from 'nuxt_plugin_request_e6dd6e04' // Source: ../plugins/request.js (mode: 'all')
import nuxt_plugin_api_785206da from 'nuxt_plugin_api_785206da' // Source: ../plugins/api.js (mode: 'all')
import nuxt_plugin_i18n_1fba523a from 'nuxt_plugin_i18n_1fba523a' // Source: ../plugins/i18n.js (mode: 'all')
import nuxt_plugin_nuxtswiperplugin_622602ba from 'nuxt_plugin_nuxtswiperplugin_622602ba' // Source: ../plugins/nuxt-swiper-plugin.js (mode: 'all')
import nuxt_plugin_vueglobal_25dfa037 from 'nuxt_plugin_vueglobal_25dfa037' // Source: ../plugins/vue-global.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"映画チケット予約なら映画ランド","meta":[{"charset":"utf-8"},{"hid":"description","name":"description","content":"eigaland-ticketing-web-reactive"},{"hid":"og:url","name":"og:url","content":"https:\u002F\u002Feigaland.com\u002F"},{"hid":"og:type","name":"og:type","content":"website"},{"hid":"og:title","name":"og:title","content":"eigaland-ticketing-web-reactive"},{"hid":"og:description","name":"og:description","content":"eigaland-ticketing-web-reactive"},{"hid":"og:image","name":"og:image","content":"https:\u002F\u002Feigaland.com\u002Fassets\u002Feigaland\u002Fimages\u002Flogos\u002Feigaland_icon_256x256.png"},{"hid":"twitter:card","name":"twitter:card","content":"summary"},{"hid":"twitter:site","name":"twitter:site","content":"@eigaland"},{"hid":"twitter:title","name":"twitter:title","content":"eigaland-ticketing-web-reactive"},{"hid":"twitter:description","name":"twitter:description","content":"eigaland-ticketing-web-reactive"},{"hid":"twitter:image","name":"twitter:image","content":"https:\u002F\u002Feigaland.com\u002Fassets\u002Feigaland\u002Fimages\u002Flogos\u002Feigaland_icon_256x256.png"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"映画"},{"hid":"author","name":"author","content":"qintao.yao"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"映画"}],"link":[{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.211d9d13.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.5a48f7.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.5a48f7.png","sizes":"512x512"}],"style":[],"script":[],"htmlAttrs":{"lang":"ja"}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_6f176f84 === 'function') {
    await nuxt_plugin_workbox_6f176f84(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_a2ed9440 === 'function') {
    await nuxt_plugin_nuxticons_a2ed9440(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_76a64410 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_76a64410(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_afdb1730 === 'function') {
    await nuxt_plugin_axios_afdb1730(app.context, inject)
  }

  if (typeof nuxt_plugin_elementui_d905880e === 'function') {
    await nuxt_plugin_elementui_d905880e(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_5659d192 === 'function') {
    await nuxt_plugin_axios_5659d192(app.context, inject)
  }

  if (typeof nuxt_plugin_request_e6dd6e04 === 'function') {
    await nuxt_plugin_request_e6dd6e04(app.context, inject)
  }

  if (typeof nuxt_plugin_api_785206da === 'function') {
    await nuxt_plugin_api_785206da(app.context, inject)
  }

  if (typeof nuxt_plugin_i18n_1fba523a === 'function') {
    await nuxt_plugin_i18n_1fba523a(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtswiperplugin_622602ba === 'function') {
    await nuxt_plugin_nuxtswiperplugin_622602ba(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueglobal_25dfa037 === 'function') {
    await nuxt_plugin_vueglobal_25dfa037(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
