import { RawClientSideBasePluginConfig } from '@graphql-codegen/visitor-plugin-common';

/**
 * @description This plugin generates Vue Apollo smart query functions with TypeScript typings.
 *
 * It extends the basic TypeScript plugins: `@graphql-codegen/typescript`, `@graphql-codegen/typescript-operations` - and thus shares a similar configuration.
 *
 */
export interface VueApolloSmartOpsRawPluginConfig extends RawClientSideBasePluginConfig {
  /**
   * @name withSmartOperationFunctions
   * @description Customize the output by enabling/disabling the generated Vue Apollo Smart Operations functions.
   * @default true
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *    - typescript-operations
   *    - typescript-vue-apollo-smart-ops
   *  config:
   *    withSmartOperationFunctions: true
   * ```
   */
  withSmartOperationFunctions?: boolean;
  /**
   * @name vueApolloOperationFunctionsImportFrom
   * @description The `typescript-vue-apollo-smart-ops` plugin requires three functions that are used to define your
   *              query, subscription and mutation operation functions:
   *                - `createMutationFunction`
   *                - `createSmartQueryOptionsFunction`
   *                - `createSmartSubscriptionOptionsFunction`
   *              By default these functions are provided by the `vue-apollo-smart-ops` package, but you can substitute
   *              your own import path if you want to replace them with other implementations.
   * @default vue-apollo-smart-ops
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *    - typescript-operations
   *    - typescript-vue-apollo-smart-ops
   *  config:
   *    vueApolloOperationFunctionsImportFrom: vue-apollo-smart-ops
   * ```
   */
  vueApolloOperationFunctionsImportFrom?: 'vue-apollo-smart-ops' | string;
  /**
   * @name vueApolloErrorType
   * @description The operation functions generated by `typescript-vue-apollo-smart-ops` include some functionality for
   *              error handling. This configuration parameter allows you to customise the name of the error type that
   *              will be used. The default is to use `ApolloError` from the `apollo-client` package.
   * @default ApolloError
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *    - typescript-operations
   *    - typescript-vue-apollo-smart-ops
   *  config:
   *    vueApolloErrorType: ApolloError
   *    vueApolloErrorTypeImportFrom: apollo-client
   * ```
   */
  vueApolloErrorType?: 'ApolloError' | string;
  /**
   * @name vueApolloErrorTypeImportFrom
   * @description The operation functions generated by `typescript-vue-apollo-smart-ops` include some functionality for
   *              error handling. This configuration parameter allows you to customise the package where the error type
   *              will be imported from. The default is to use `ApolloError` from the `apollo-client` package.
   * @default vue-apollo-smart-ops
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *    - typescript-operations
   *    - typescript-vue-apollo-smart-ops
   *  config:
   *    vueApolloErrorType: ApolloError
   *    vueApolloErrorTypeImportFrom: apollo-client
   * ```
   */
  vueApolloErrorTypeImportFrom?: 'apollo-client' | string;
  /**
   * @name vueApolloErrorHandlerFunction
   * @description The operation functions generated by `typescript-vue-apollo-smart-ops` include some functionality for
   *              error handling. You may supply an error handler function that will be called when an error occurs in
   *              a query, subscription or mutation operation. This function should implement the
   *              `ApolloOperationErrorHandlerFunction` interface from `vue-apollo-smart-ops` package. You can
   *              have a custom handler in your app that shows a notification to the user, for example. If unspecified,
   *              this functionality will be disabled and errors handled (or not) by Vue Apollo in the normal way.
   * @default undefined
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *    - typescript-operations
   *    - typescript-vue-apollo-smart-ops
   *  config:
   *    vueApolloErrorHandlerFunction: handleApolloError
   *    vueApolloErrorHandlerFunctionImportFrom: ./src/handleApolloError.ts
   * ```
   */
  vueApolloErrorHandlerFunction?: string;
  /**
   * @name vueApolloErrorHandlerFunctionImportFrom
   * @description The import path where `vueApolloErrorHandlerFunction` should be imported from. Can be a package name
   *              or a local file path (anything that works in an import statement).
   * @default undefined
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *    - typescript-operations
   *    - typescript-vue-apollo-smart-ops
   *  config:
   *    vueApolloErrorHandlerFunction: handleApolloError
   *    vueApolloErrorHandlerFunctionImportFrom: ./src/handleApolloError.ts
   * ```
   */
  vueApolloErrorHandlerFunctionImportFrom?: string;
  /**
   * @name vueAppType
   * @description The operation functions generated by `typescript-vue-apollo-smart-ops` include some functionality for
   *              error handling. When an error occurs, the Vue app instance is passed to the error handler. You can
   *              customise the expected type of the app object. For example, a Nuxt.js app might use `NuxtApp` from
   *              `@nuxt/types/app` instead. When unspecified, the default type is `Vue` from `vue/types/vue`.
   * @default undefined
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *    - typescript-operations
   *    - typescript-vue-apollo-smart-ops
   *  config:
   *    vueAppType: Vue
   *    vueAppTypeImportFrom: vue/types/vue
   * ```
   */
  vueAppType?: string;
  /**
   * @name vueAppTypeImportFrom
   * @description The import path where `vueAppType` should be imported from. Can be a package name or a local file path
   *              (anything that works in an import statement).
   * @default undefined
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *    - typescript-operations
   *    - typescript-vue-apollo-smart-ops
   *  config:
   *    vueAppType: Vue
   *    vueAppTypeImportFrom: vue/types/vue
   * ```
   */
  vueAppTypeImportFrom?: string;
  /**
   * @name addDocBlocks
   * @description Allows you to enable/disable the generation of docblocks in generated code.
   *              Some IDE's (like VSCode) add extra inline information with docblocks, you can disable this feature if
   *              your preferred IDE does not.
   * @default true
   *
   * @exampleMarkdown
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *    - typescript-operations
   *    - typescript-vue-apollo-smart-ops
   *  config:
   *    addDocBlocks: true
   * ```
   */
  addDocBlocks?: boolean;
}