export type Maybe<T> = T | null;

export interface SitePageConnectionSort {
  fields: (Maybe<SitePageConnectionSortByFieldsEnum>)[];

  order?: (Maybe<SitePageConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: Maybe<SitePageConnectionJsonNameQueryString>;

  internalComponentName?: Maybe<
    SitePageConnectionInternalComponentNameQueryString
  >;

  path?: Maybe<SitePageConnectionPathQueryString_2>;

  component?: Maybe<SitePageConnectionComponentQueryString>;

  componentChunkName?: Maybe<SitePageConnectionComponentChunkNameQueryString>;

  context?: Maybe<SitePageConnectionContextInputObject>;

  pluginCreator?: Maybe<SitePageConnectionPluginCreatorInputObject>;

  pluginCreatorId?: Maybe<SitePageConnectionPluginCreatorIdQueryString_2>;

  componentPath?: Maybe<SitePageConnectionComponentPathQueryString>;

  id?: Maybe<SitePageConnectionIdQueryString_2>;

  internal?: Maybe<SitePageConnectionInternalInputObject_2>;
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextInputObject {
  slug?: Maybe<SitePageConnectionContextSlugQueryString>;

  tag?: Maybe<SitePageConnectionContextTagQueryString>;

  category?: Maybe<SitePageConnectionContextCategoryQueryString>;
}

export interface SitePageConnectionContextSlugQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextTagQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionContextCategoryQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: Maybe<SitePageConnectionPluginCreatorResolveQueryString>;

  id?: Maybe<SitePageConnectionPluginCreatorIdQueryString>;

  name?: Maybe<SitePageConnectionPluginCreatorNameQueryString>;

  version?: Maybe<SitePageConnectionPluginCreatorVersionQueryString>;

  pluginOptions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsInputObject
  >;

  nodeAPIs?: Maybe<SitePageConnectionPluginCreatorNodeApIsQueryList>;

  browserAPIs?: Maybe<SitePageConnectionPluginCreatorBrowserApIsQueryList>;

  ssrAPIs?: Maybe<SitePageConnectionPluginCreatorSsrApIsQueryList>;

  pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginFilepathQueryString
  >;

  packageJson?: Maybe<SitePageConnectionPluginCreatorPackageJsonInputObject>;

  internal?: Maybe<SitePageConnectionPluginCreatorInternalInputObject>;
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  plugins?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList>;

  name?: Maybe<SitePageConnectionPluginCreatorPluginOptionsNameQueryString>;

  path?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathQueryString>;

  maxWidth?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger
  >;

  linkImagesToOriginal?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean
  >;

  short_name?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString
  >;

  start_url?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString
  >;

  background_color?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString
  >;

  theme_color?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString
  >;

  display?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString
  >;

  icons?: Maybe<SitePageConnectionPluginCreatorPluginOptionsIconsQueryList>;

  pathCheck?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {
  resolve?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString
  >;

  id?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString>;

  name?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString
  >;

  pluginOptions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject
  >;

  browserAPIs?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList
  >;

  pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  maxWidth?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger
  >;

  linkImagesToOriginal?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconsQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsIconsInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconsInputObject {
  src?: Maybe<SitePageConnectionPluginCreatorPluginOptionsIconsSrcQueryString>;

  sizes?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsIconsSizesQueryString
  >;

  type?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsIconsTypeQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconsSrcQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconsSizesQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconsTypeQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonNameQueryString>;

  description?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString
  >;

  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonVersionQueryString>;

  main?: Maybe<SitePageConnectionPluginCreatorPackageJsonMainQueryString>;

  author?: Maybe<SitePageConnectionPluginCreatorPackageJsonAuthorQueryString>;

  license?: Maybe<SitePageConnectionPluginCreatorPackageJsonLicenseQueryString>;

  dependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList
  >;

  devDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList
  >;

  peerDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList
  >;

  keywords?: Maybe<SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList>;
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString
  >;

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: Maybe<
    SitePageConnectionPluginCreatorInternalContentDigestQueryString
  >;

  type?: Maybe<SitePageConnectionPluginCreatorInternalTypeQueryString>;

  owner?: Maybe<SitePageConnectionPluginCreatorInternalOwnerQueryString>;
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: Maybe<SitePageConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<SitePageConnectionInternalContentDigestQueryString_2>;

  description?: Maybe<SitePageConnectionInternalDescriptionQueryString>;

  owner?: Maybe<SitePageConnectionInternalOwnerQueryString_2>;
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionSort {
  fields: (Maybe<SitePluginConnectionSortByFieldsEnum>)[];

  order?: (Maybe<SitePluginConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: Maybe<SitePluginConnectionResolveQueryString_2>;

  id?: Maybe<SitePluginConnectionIdQueryString_2>;

  name?: Maybe<SitePluginConnectionNameQueryString_2>;

  version?: Maybe<SitePluginConnectionVersionQueryString_2>;

  pluginOptions?: Maybe<SitePluginConnectionPluginOptionsInputObject_2>;

  nodeAPIs?: Maybe<SitePluginConnectionNodeApIsQueryList_2>;

  browserAPIs?: Maybe<SitePluginConnectionBrowserApIsQueryList_2>;

  ssrAPIs?: Maybe<SitePluginConnectionSsrApIsQueryList_2>;

  pluginFilepath?: Maybe<SitePluginConnectionPluginFilepathQueryString_2>;

  packageJson?: Maybe<SitePluginConnectionPackageJsonInputObject_2>;

  internal?: Maybe<SitePluginConnectionInternalInputObject_2>;
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  plugins?: Maybe<SitePluginConnectionPluginOptionsPluginsQueryList_2>;

  name?: Maybe<SitePluginConnectionPluginOptionsNameQueryString_2>;

  path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>;

  maxWidth?: Maybe<SitePluginConnectionPluginOptionsMaxWidthQueryInteger_2>;

  linkImagesToOriginal?: Maybe<
    SitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2
  >;

  short_name?: Maybe<SitePluginConnectionPluginOptionsShortNameQueryString_2>;

  start_url?: Maybe<SitePluginConnectionPluginOptionsStartUrlQueryString_2>;

  background_color?: Maybe<
    SitePluginConnectionPluginOptionsBackgroundColorQueryString_2
  >;

  theme_color?: Maybe<SitePluginConnectionPluginOptionsThemeColorQueryString_2>;

  display?: Maybe<SitePluginConnectionPluginOptionsDisplayQueryString_2>;

  icons?: Maybe<SitePluginConnectionPluginOptionsIconsQueryList_2>;

  pathCheck?: Maybe<SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2>;
}

export interface SitePluginConnectionPluginOptionsPluginsQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPluginOptionsPluginsInputObject_2>;
}

export interface SitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve?: Maybe<SitePluginConnectionPluginOptionsPluginsResolveQueryString_2>;

  id?: Maybe<SitePluginConnectionPluginOptionsPluginsIdQueryString_2>;

  name?: Maybe<SitePluginConnectionPluginOptionsPluginsNameQueryString_2>;

  version?: Maybe<SitePluginConnectionPluginOptionsPluginsVersionQueryString_2>;

  pluginOptions?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2
  >;

  browserAPIs?: Maybe<
    SitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2
  >;

  pluginFilepath?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2
  >;
}

export interface SitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2
  >;

  linkImagesToOriginal?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2
  >;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionPluginOptionsShortNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsStartUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsThemeColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsDisplayQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsIconsQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPluginOptionsIconsInputObject_2>;
}

export interface SitePluginConnectionPluginOptionsIconsInputObject_2 {
  src?: Maybe<SitePluginConnectionPluginOptionsIconsSrcQueryString_2>;

  sizes?: Maybe<SitePluginConnectionPluginOptionsIconsSizesQueryString_2>;

  type?: Maybe<SitePluginConnectionPluginOptionsIconsTypeQueryString_2>;
}

export interface SitePluginConnectionPluginOptionsIconsSrcQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsIconsSizesQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsIconsTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonNameQueryString_2>;

  description?: Maybe<SitePluginConnectionPackageJsonDescriptionQueryString_2>;

  version?: Maybe<SitePluginConnectionPackageJsonVersionQueryString_2>;

  main?: Maybe<SitePluginConnectionPackageJsonMainQueryString_2>;

  author?: Maybe<SitePluginConnectionPackageJsonAuthorQueryString_2>;

  license?: Maybe<SitePluginConnectionPackageJsonLicenseQueryString_2>;

  dependencies?: Maybe<SitePluginConnectionPackageJsonDependenciesQueryList_2>;

  devDependencies?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesQueryList_2
  >;

  peerDependencies?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesQueryList_2
  >;

  keywords?: Maybe<SitePluginConnectionPackageJsonKeywordsQueryList_2>;
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDependenciesInputObject_2>;
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDependenciesNameQueryString_2>;

  version?: Maybe<
    SitePluginConnectionPackageJsonDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesInputObject_2
  >;
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2>;

  version?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesInputObject_2
  >;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2
  >;

  version?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2
  >;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginConnectionInternalContentDigestQueryString_2>;

  type?: Maybe<SitePluginConnectionInternalTypeQueryString_2>;

  owner?: Maybe<SitePluginConnectionInternalOwnerQueryString_2>;
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionSort {
  fields: (Maybe<DirectoryConnectionSortByFieldsEnum>)[];

  order?: (Maybe<DirectoryConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterDirectory {
  id?: Maybe<DirectoryConnectionIdQueryString_2>;

  internal?: Maybe<DirectoryConnectionInternalInputObject_2>;

  sourceInstanceName?: Maybe<
    DirectoryConnectionSourceInstanceNameQueryString_2
  >;

  absolutePath?: Maybe<DirectoryConnectionAbsolutePathQueryString_2>;

  relativePath?: Maybe<DirectoryConnectionRelativePathQueryString_2>;

  extension?: Maybe<DirectoryConnectionExtensionQueryString_2>;

  size?: Maybe<DirectoryConnectionSizeQueryInteger_2>;

  prettySize?: Maybe<DirectoryConnectionPrettySizeQueryString_2>;

  modifiedTime?: Maybe<DirectoryConnectionModifiedTimeQueryString_2>;

  accessTime?: Maybe<DirectoryConnectionAccessTimeQueryString_2>;

  changeTime?: Maybe<DirectoryConnectionChangeTimeQueryString_2>;

  birthTime?: Maybe<DirectoryConnectionBirthTimeQueryString_2>;

  root?: Maybe<DirectoryConnectionRootQueryString_2>;

  dir?: Maybe<DirectoryConnectionDirQueryString_2>;

  base?: Maybe<DirectoryConnectionBaseQueryString_2>;

  ext?: Maybe<DirectoryConnectionExtQueryString_2>;

  name?: Maybe<DirectoryConnectionNameQueryString_2>;

  relativeDirectory?: Maybe<DirectoryConnectionRelativeDirectoryQueryString_2>;

  dev?: Maybe<DirectoryConnectionDevQueryInteger_2>;

  mode?: Maybe<DirectoryConnectionModeQueryInteger_2>;

  nlink?: Maybe<DirectoryConnectionNlinkQueryInteger_2>;

  uid?: Maybe<DirectoryConnectionUidQueryInteger_2>;

  gid?: Maybe<DirectoryConnectionGidQueryInteger_2>;

  rdev?: Maybe<DirectoryConnectionRdevQueryInteger_2>;

  blksize?: Maybe<DirectoryConnectionBlksizeQueryInteger_2>;

  ino?: Maybe<DirectoryConnectionInoQueryInteger_2>;

  blocks?: Maybe<DirectoryConnectionBlocksQueryInteger_2>;

  atimeMs?: Maybe<DirectoryConnectionAtimeMsQueryFloat_2>;

  mtimeMs?: Maybe<DirectoryConnectionMtimeMsQueryFloat_2>;

  ctimeMs?: Maybe<DirectoryConnectionCtimeMsQueryFloat_2>;

  birthtimeMs?: Maybe<DirectoryConnectionBirthtimeMsQueryFloat_2>;

  atime?: Maybe<DirectoryConnectionAtimeQueryString_2>;

  mtime?: Maybe<DirectoryConnectionMtimeQueryString_2>;

  ctime?: Maybe<DirectoryConnectionCtimeQueryString_2>;

  birthtime?: Maybe<DirectoryConnectionBirthtimeQueryString_2>;
}

export interface DirectoryConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionInternalInputObject_2 {
  contentDigest?: Maybe<DirectoryConnectionInternalContentDigestQueryString_2>;

  type?: Maybe<DirectoryConnectionInternalTypeQueryString_2>;

  description?: Maybe<DirectoryConnectionInternalDescriptionQueryString_2>;

  owner?: Maybe<DirectoryConnectionInternalOwnerQueryString_2>;
}

export interface DirectoryConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionInternalDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionRelativePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionExtensionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionPrettySizeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionModifiedTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionAccessTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionChangeTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionBirthTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionRootQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionDirQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionBaseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionExtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionDevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionModeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionNlinkQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionUidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionGidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionRdevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionBlksizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionInoQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionBlocksQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionAtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionMtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionCtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryConnectionAtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionMtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionCtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryConnectionBirthtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionSort {
  fields: (Maybe<FileConnectionSortByFieldsEnum>)[];

  order?: (Maybe<FileConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterFile {
  id?: Maybe<FileConnectionIdQueryString_2>;

  internal?: Maybe<FileConnectionInternalInputObject_2>;

  sourceInstanceName?: Maybe<FileConnectionSourceInstanceNameQueryString_2>;

  absolutePath?: Maybe<FileConnectionAbsolutePathQueryString_2>;

  relativePath?: Maybe<FileConnectionRelativePathQueryString_2>;

  extension?: Maybe<FileConnectionExtensionQueryString_2>;

  size?: Maybe<FileConnectionSizeQueryInteger_2>;

  prettySize?: Maybe<FileConnectionPrettySizeQueryString_2>;

  modifiedTime?: Maybe<FileConnectionModifiedTimeQueryString_2>;

  accessTime?: Maybe<FileConnectionAccessTimeQueryString_2>;

  changeTime?: Maybe<FileConnectionChangeTimeQueryString_2>;

  birthTime?: Maybe<FileConnectionBirthTimeQueryString_2>;

  root?: Maybe<FileConnectionRootQueryString_2>;

  dir?: Maybe<FileConnectionDirQueryString_2>;

  base?: Maybe<FileConnectionBaseQueryString_2>;

  ext?: Maybe<FileConnectionExtQueryString_2>;

  name?: Maybe<FileConnectionNameQueryString_2>;

  relativeDirectory?: Maybe<FileConnectionRelativeDirectoryQueryString_2>;

  dev?: Maybe<FileConnectionDevQueryInteger_2>;

  mode?: Maybe<FileConnectionModeQueryInteger_2>;

  nlink?: Maybe<FileConnectionNlinkQueryInteger_2>;

  uid?: Maybe<FileConnectionUidQueryInteger_2>;

  gid?: Maybe<FileConnectionGidQueryInteger_2>;

  rdev?: Maybe<FileConnectionRdevQueryInteger_2>;

  blksize?: Maybe<FileConnectionBlksizeQueryInteger_2>;

  ino?: Maybe<FileConnectionInoQueryInteger_2>;

  blocks?: Maybe<FileConnectionBlocksQueryInteger_2>;

  atimeMs?: Maybe<FileConnectionAtimeMsQueryFloat_2>;

  mtimeMs?: Maybe<FileConnectionMtimeMsQueryFloat_2>;

  ctimeMs?: Maybe<FileConnectionCtimeMsQueryFloat_2>;

  birthtimeMs?: Maybe<FileConnectionBirthtimeMsQueryFloat_2>;

  atime?: Maybe<FileConnectionAtimeQueryString_2>;

  mtime?: Maybe<FileConnectionMtimeQueryString_2>;

  ctime?: Maybe<FileConnectionCtimeQueryString_2>;

  birthtime?: Maybe<FileConnectionBirthtimeQueryString_2>;

  publicURL?: Maybe<PublicUrlQueryString_4>;
}

export interface FileConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalInputObject_2 {
  contentDigest?: Maybe<FileConnectionInternalContentDigestQueryString_2>;

  type?: Maybe<FileConnectionInternalTypeQueryString_2>;

  mediaType?: Maybe<FileConnectionInternalMediaTypeQueryString_2>;

  description?: Maybe<FileConnectionInternalDescriptionQueryString_2>;

  owner?: Maybe<FileConnectionInternalOwnerQueryString_2>;
}

export interface FileConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionRelativePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionExtensionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionPrettySizeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionModifiedTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionAccessTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionChangeTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionBirthTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionRootQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionDirQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionBaseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionExtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionDevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionModeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionNlinkQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionUidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionGidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionRdevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionBlksizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionInoQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionBlocksQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionAtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionMtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionCtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileConnectionAtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionMtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionCtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileConnectionBirthtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface PublicUrlQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DuotoneGradient {
  highlight?: Maybe<string>;

  shadow?: Maybe<string>;

  opacity?: Maybe<number>;
}

export interface Potrace {
  turnPolicy?: Maybe<PotraceTurnPolicy>;

  turdSize?: Maybe<number>;

  alphaMax?: Maybe<number>;

  optCurve?: Maybe<boolean>;

  optTolerance?: Maybe<number>;

  threshold?: Maybe<number>;

  blackOnWhite?: Maybe<boolean>;

  color?: Maybe<string>;

  background?: Maybe<string>;
}

export interface ImageSharpConnectionSort {
  fields: (Maybe<ImageSharpConnectionSortByFieldsEnum>)[];

  order?: (Maybe<ImageSharpConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterImageSharp {
  id?: Maybe<ImageSharpConnectionIdQueryString_2>;

  internal?: Maybe<ImageSharpConnectionInternalInputObject_2>;

  fixed?: Maybe<FixedTypeName_4>;

  resolutions?: Maybe<ResolutionsTypeName_4>;

  fluid?: Maybe<FluidTypeName_4>;

  sizes?: Maybe<SizesTypeName_4>;

  original?: Maybe<OriginalTypeName_4>;

  resize?: Maybe<ResizeTypeName_4>;
}

export interface ImageSharpConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ImageSharpConnectionInternalInputObject_2 {
  contentDigest?: Maybe<ImageSharpConnectionInternalContentDigestQueryString_2>;

  type?: Maybe<ImageSharpConnectionInternalTypeQueryString_2>;

  owner?: Maybe<ImageSharpConnectionInternalOwnerQueryString_2>;
}

export interface ImageSharpConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ImageSharpConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ImageSharpConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTypeName_4 {
  base64?: Maybe<FixedBase64QueryString_4>;

  tracedSVG?: Maybe<FixedTracedSvgQueryString_4>;

  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_4>;

  width?: Maybe<FixedWidthQueryFloat_4>;

  height?: Maybe<FixedHeightQueryFloat_4>;

  src?: Maybe<FixedSrcQueryString_4>;

  srcSet?: Maybe<FixedSrcSetQueryString_4>;

  srcWebp?: Maybe<FixedSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_4>;

  originalName?: Maybe<FixedOriginalNameQueryString_4>;
}

export interface FixedBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedWidthQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedHeightQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedOriginalNameQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTypeName_4 {
  base64?: Maybe<ResolutionsBase64QueryString_4>;

  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_4>;

  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_4>;

  width?: Maybe<ResolutionsWidthQueryFloat_4>;

  height?: Maybe<ResolutionsHeightQueryFloat_4>;

  src?: Maybe<ResolutionsSrcQueryString_4>;

  srcSet?: Maybe<ResolutionsSrcSetQueryString_4>;

  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_4>;

  originalName?: Maybe<ResolutionsOriginalNameQueryString_4>;
}

export interface ResolutionsBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsWidthQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsHeightQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsOriginalNameQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTypeName_4 {
  base64?: Maybe<FluidBase64QueryString_4>;

  tracedSVG?: Maybe<FluidTracedSvgQueryString_4>;

  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_4>;

  src?: Maybe<FluidSrcQueryString_4>;

  srcSet?: Maybe<FluidSrcSetQueryString_4>;

  srcWebp?: Maybe<FluidSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_4>;

  sizes?: Maybe<FluidSizesQueryString_4>;

  originalImg?: Maybe<FluidOriginalImgQueryString_4>;

  originalName?: Maybe<FluidOriginalNameQueryString_4>;

  presentationWidth?: Maybe<FluidPresentationWidthQueryInt_4>;

  presentationHeight?: Maybe<FluidPresentationHeightQueryInt_4>;
}

export interface FluidBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FluidSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSizesQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidOriginalImgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidOriginalNameQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidPresentationWidthQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FluidPresentationHeightQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesTypeName_4 {
  base64?: Maybe<SizesBase64QueryString_4>;

  tracedSVG?: Maybe<SizesTracedSvgQueryString_4>;

  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_4>;

  src?: Maybe<SizesSrcQueryString_4>;

  srcSet?: Maybe<SizesSrcSetQueryString_4>;

  srcWebp?: Maybe<SizesSrcWebpQueryString_4>;

  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_4>;

  sizes?: Maybe<SizesSizesQueryString_4>;

  originalImg?: Maybe<SizesOriginalImgQueryString_4>;

  originalName?: Maybe<SizesOriginalNameQueryString_4>;

  presentationWidth?: Maybe<SizesPresentationWidthQueryInt_4>;

  presentationHeight?: Maybe<SizesPresentationHeightQueryInt_4>;
}

export interface SizesBase64QueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetWebpQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSizesQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesOriginalImgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesOriginalNameQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesPresentationWidthQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesPresentationHeightQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface OriginalTypeName_4 {
  width?: Maybe<OriginalWidthQueryFloat_4>;

  height?: Maybe<OriginalHeightQueryFloat_4>;

  src?: Maybe<OriginalSrcQueryString_4>;
}

export interface OriginalWidthQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface OriginalHeightQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface OriginalSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTypeName_4 {
  src?: Maybe<ResizeSrcQueryString_4>;

  tracedSVG?: Maybe<ResizeTracedSvgQueryString_4>;

  width?: Maybe<ResizeWidthQueryInt_4>;

  height?: Maybe<ResizeHeightQueryInt_4>;

  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_4>;

  originalName?: Maybe<ResizeOriginalNameQueryString_4>;
}

export interface ResizeSrcQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTracedSvgQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeWidthQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeHeightQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeAspectRatioQueryFloat_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeOriginalNameQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionSort {
  fields: (Maybe<MarkdownRemarkConnectionSortByFieldsEnum>)[];

  order?: (Maybe<MarkdownRemarkConnectionSortOrderValues>)[];
}
/** Filter connection on its fields */
export interface FilterMarkdownRemark {
  id?: Maybe<MarkdownRemarkConnectionIdQueryString_2>;

  internal?: Maybe<MarkdownRemarkConnectionInternalInputObject_2>;

  frontmatter?: Maybe<MarkdownRemarkConnectionFrontmatterInputObject_2>;

  rawMarkdownBody?: Maybe<MarkdownRemarkConnectionRawMarkdownBodyQueryString_2>;

  fileAbsolutePath?: Maybe<
    MarkdownRemarkConnectionFileAbsolutePathQueryString_2
  >;

  fields?: Maybe<MarkdownRemarkConnectionFieldsInputObject_2>;

  html?: Maybe<HtmlQueryString_4>;

  excerpt?: Maybe<ExcerptQueryString_4>;

  headings?: Maybe<HeadingsQueryList_4>;

  timeToRead?: Maybe<TimeToReadQueryInt_4>;

  tableOfContents?: Maybe<TableOfContentsQueryString_4>;

  wordCount?: Maybe<WordCountTypeName_4>;
}

export interface MarkdownRemarkConnectionIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalInputObject_2 {
  content?: Maybe<MarkdownRemarkConnectionInternalContentQueryString_2>;

  type?: Maybe<MarkdownRemarkConnectionInternalTypeQueryString_2>;

  contentDigest?: Maybe<
    MarkdownRemarkConnectionInternalContentDigestQueryString_2
  >;

  owner?: Maybe<MarkdownRemarkConnectionInternalOwnerQueryString_2>;

  fieldOwners?: Maybe<MarkdownRemarkConnectionInternalFieldOwnersInputObject_2>;
}

export interface MarkdownRemarkConnectionInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionInternalFieldOwnersInputObject_2 {
  slug?: Maybe<MarkdownRemarkConnectionInternalFieldOwnersSlugQueryString_2>;
}

export interface MarkdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterInputObject_2 {
  title?: Maybe<MarkdownRemarkConnectionFrontmatterTitleQueryString_2>;

  cover?: Maybe<MarkdownRemarkConnectionFrontmatterCoverQueryString_2>;

  date?: Maybe<MarkdownRemarkConnectionFrontmatterDateQueryString_2>;

  category?: Maybe<MarkdownRemarkConnectionFrontmatterCategoryQueryString_2>;

  tags?: Maybe<MarkdownRemarkConnectionFrontmatterTagsQueryList_2>;

  published?: Maybe<MarkdownRemarkConnectionFrontmatterPublishedQueryBoolean_2>;
}

export interface MarkdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterCoverQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterDateQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterCategoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterTagsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFrontmatterPublishedQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkConnectionFieldsInputObject_2 {
  slug?: Maybe<MarkdownRemarkConnectionFieldsSlugQueryString_2>;
}

export interface MarkdownRemarkConnectionFieldsSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HtmlQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ExcerptQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsQueryList_4 {
  elemMatch?: Maybe<HeadingsListElemTypeName_4>;
}

export interface HeadingsListElemTypeName_4 {
  value?: Maybe<HeadingsListElemValueQueryString_4>;

  depth?: Maybe<HeadingsListElemDepthQueryInt_4>;
}

export interface HeadingsListElemValueQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsListElemDepthQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TimeToReadQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TableOfContentsQueryString_4 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface WordCountTypeName_4 {
  paragraphs?: Maybe<WordCountParagraphsQueryInt_4>;

  sentences?: Maybe<WordCountSentencesQueryInt_4>;

  words?: Maybe<WordCountWordsQueryInt_4>;
}

export interface WordCountParagraphsQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountSentencesQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountWordsQueryInt_4 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePageJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalComponentNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentChunkNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextInputObject {
  slug?: Maybe<SitePageContextSlugQueryString>;

  tag?: Maybe<SitePageContextTagQueryString>;

  category?: Maybe<SitePageContextCategoryQueryString>;
}

export interface SitePageContextSlugQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextTagQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageContextCategoryQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInputObject {
  resolve?: Maybe<SitePagePluginCreatorResolveQueryString>;

  id?: Maybe<SitePagePluginCreatorIdQueryString>;

  name?: Maybe<SitePagePluginCreatorNameQueryString>;

  version?: Maybe<SitePagePluginCreatorVersionQueryString>;

  pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsInputObject>;

  nodeAPIs?: Maybe<SitePagePluginCreatorNodeApIsQueryList>;

  browserAPIs?: Maybe<SitePagePluginCreatorBrowserApIsQueryList>;

  ssrAPIs?: Maybe<SitePagePluginCreatorSsrApIsQueryList>;

  pluginFilepath?: Maybe<SitePagePluginCreatorPluginFilepathQueryString>;

  packageJson?: Maybe<SitePagePluginCreatorPackageJsonInputObject>;

  internal?: Maybe<SitePagePluginCreatorInternalInputObject>;
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  plugins?: Maybe<SitePagePluginCreatorPluginOptionsPluginsQueryList>;

  name?: Maybe<SitePagePluginCreatorPluginOptionsNameQueryString>;

  path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>;

  maxWidth?: Maybe<SitePagePluginCreatorPluginOptionsMaxWidthQueryInteger>;

  linkImagesToOriginal?: Maybe<
    SitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean
  >;

  short_name?: Maybe<SitePagePluginCreatorPluginOptionsShortNameQueryString>;

  start_url?: Maybe<SitePagePluginCreatorPluginOptionsStartUrlQueryString>;

  background_color?: Maybe<
    SitePagePluginCreatorPluginOptionsBackgroundColorQueryString
  >;

  theme_color?: Maybe<SitePagePluginCreatorPluginOptionsThemeColorQueryString>;

  display?: Maybe<SitePagePluginCreatorPluginOptionsDisplayQueryString>;

  icons?: Maybe<SitePagePluginCreatorPluginOptionsIconsQueryList>;

  pathCheck?: Maybe<SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPluginOptionsPluginsInputObject>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsInputObject {
  resolve?: Maybe<SitePagePluginCreatorPluginOptionsPluginsResolveQueryString>;

  id?: Maybe<SitePagePluginCreatorPluginOptionsPluginsIdQueryString>;

  name?: Maybe<SitePagePluginCreatorPluginOptionsPluginsNameQueryString>;

  version?: Maybe<SitePagePluginCreatorPluginOptionsPluginsVersionQueryString>;

  pluginOptions?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject
  >;

  browserAPIs?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList
  >;

  pluginFilepath?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString
  >;
}

export interface SitePagePluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  maxWidth?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger
  >;

  linkImagesToOriginal?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean
  >;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsLinkImagesToOriginalQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsShortNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsStartUrlQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsThemeColorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsDisplayQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsIconsQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPluginOptionsIconsInputObject>;
}

export interface SitePagePluginCreatorPluginOptionsIconsInputObject {
  src?: Maybe<SitePagePluginCreatorPluginOptionsIconsSrcQueryString>;

  sizes?: Maybe<SitePagePluginCreatorPluginOptionsIconsSizesQueryString>;

  type?: Maybe<SitePagePluginCreatorPluginOptionsIconsTypeQueryString>;
}

export interface SitePagePluginCreatorPluginOptionsIconsSrcQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsIconsSizesQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsIconsTypeQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorBrowserApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonNameQueryString>;

  description?: Maybe<SitePagePluginCreatorPackageJsonDescriptionQueryString>;

  version?: Maybe<SitePagePluginCreatorPackageJsonVersionQueryString>;

  main?: Maybe<SitePagePluginCreatorPackageJsonMainQueryString>;

  author?: Maybe<SitePagePluginCreatorPackageJsonAuthorQueryString>;

  license?: Maybe<SitePagePluginCreatorPackageJsonLicenseQueryString>;

  dependencies?: Maybe<SitePagePluginCreatorPackageJsonDependenciesQueryList>;

  devDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesQueryList
  >;

  peerDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesQueryList
  >;

  keywords?: Maybe<SitePagePluginCreatorPackageJsonKeywordsQueryList>;
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonAuthorQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDependenciesInputObject>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDependenciesNameQueryString>;

  version?: Maybe<
    SitePagePluginCreatorPackageJsonDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesInputObject>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString>;

  version?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesInputObject
  >;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString>;

  version?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: Maybe<SitePagePluginCreatorInternalContentDigestQueryString>;

  type?: Maybe<SitePagePluginCreatorInternalTypeQueryString>;

  owner?: Maybe<SitePagePluginCreatorInternalOwnerQueryString>;
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageComponentPathQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalInputObject_2 {
  type?: Maybe<SitePageInternalTypeQueryString_2>;

  contentDigest?: Maybe<SitePageInternalContentDigestQueryString_2>;

  description?: Maybe<SitePageInternalDescriptionQueryString>;

  owner?: Maybe<SitePageInternalOwnerQueryString_2>;
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalDescriptionQueryString {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsInputObject_2 {
  plugins?: Maybe<SitePluginPluginOptionsPluginsQueryList_2>;

  name?: Maybe<SitePluginPluginOptionsNameQueryString_2>;

  path?: Maybe<SitePluginPluginOptionsPathQueryString_2>;

  maxWidth?: Maybe<SitePluginPluginOptionsMaxWidthQueryInteger_2>;

  linkImagesToOriginal?: Maybe<
    SitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2
  >;

  short_name?: Maybe<SitePluginPluginOptionsShortNameQueryString_2>;

  start_url?: Maybe<SitePluginPluginOptionsStartUrlQueryString_2>;

  background_color?: Maybe<SitePluginPluginOptionsBackgroundColorQueryString_2>;

  theme_color?: Maybe<SitePluginPluginOptionsThemeColorQueryString_2>;

  display?: Maybe<SitePluginPluginOptionsDisplayQueryString_2>;

  icons?: Maybe<SitePluginPluginOptionsIconsQueryList_2>;

  pathCheck?: Maybe<SitePluginPluginOptionsPathCheckQueryBoolean_2>;
}

export interface SitePluginPluginOptionsPluginsQueryList_2 {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsInputObject_2>;
}

export interface SitePluginPluginOptionsPluginsInputObject_2 {
  resolve?: Maybe<SitePluginPluginOptionsPluginsResolveQueryString_2>;

  id?: Maybe<SitePluginPluginOptionsPluginsIdQueryString_2>;

  name?: Maybe<SitePluginPluginOptionsPluginsNameQueryString_2>;

  version?: Maybe<SitePluginPluginOptionsPluginsVersionQueryString_2>;

  pluginOptions?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsInputObject_2
  >;

  browserAPIs?: Maybe<SitePluginPluginOptionsPluginsBrowserApIsQueryList_2>;

  pluginFilepath?: Maybe<
    SitePluginPluginOptionsPluginsPluginFilepathQueryString_2
  >;
}

export interface SitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2
  >;

  linkImagesToOriginal?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2
  >;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginPluginOptionsPluginsBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsMaxWidthQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginPluginOptionsShortNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsStartUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsThemeColorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsDisplayQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsIconsQueryList_2 {
  elemMatch?: Maybe<SitePluginPluginOptionsIconsInputObject_2>;
}

export interface SitePluginPluginOptionsIconsInputObject_2 {
  src?: Maybe<SitePluginPluginOptionsIconsSrcQueryString_2>;

  sizes?: Maybe<SitePluginPluginOptionsIconsSizesQueryString_2>;

  type?: Maybe<SitePluginPluginOptionsIconsTypeQueryString_2>;
}

export interface SitePluginPluginOptionsIconsSrcQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsIconsSizesQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsIconsTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginBrowserApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: Maybe<SitePluginPackageJsonNameQueryString_2>;

  description?: Maybe<SitePluginPackageJsonDescriptionQueryString_2>;

  version?: Maybe<SitePluginPackageJsonVersionQueryString_2>;

  main?: Maybe<SitePluginPackageJsonMainQueryString_2>;

  author?: Maybe<SitePluginPackageJsonAuthorQueryString_2>;

  license?: Maybe<SitePluginPackageJsonLicenseQueryString_2>;

  dependencies?: Maybe<SitePluginPackageJsonDependenciesQueryList_2>;

  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesQueryList_2>;

  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesQueryList_2>;

  keywords?: Maybe<SitePluginPackageJsonKeywordsQueryList_2>;
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonAuthorQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDependenciesNameQueryString_2>;

  version?: Maybe<SitePluginPackageJsonDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDevDependenciesNameQueryString_2>;

  version?: Maybe<SitePluginPackageJsonDevDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesInputObject_2>;
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonPeerDependenciesNameQueryString_2>;

  version?: Maybe<SitePluginPackageJsonPeerDependenciesVersionQueryString_2>;
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginInternalContentDigestQueryString_2>;

  type?: Maybe<SitePluginInternalTypeQueryString_2>;

  owner?: Maybe<SitePluginInternalOwnerQueryString_2>;
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataInputObject_2 {
  title?: Maybe<SiteSiteMetadataTitleQueryString_2>;

  siteUrl?: Maybe<SiteSiteMetadataSiteUrlQueryString_2>;
}

export interface SiteSiteMetadataTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteSiteMetadataSiteUrlQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePortQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteHostQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePathPrefixQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface SiteBuildTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalInputObject_2 {
  contentDigest?: Maybe<SiteInternalContentDigestQueryString_2>;

  type?: Maybe<SiteInternalTypeQueryString_2>;

  owner?: Maybe<SiteInternalOwnerQueryString_2>;
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryInternalInputObject_2 {
  contentDigest?: Maybe<DirectoryInternalContentDigestQueryString_2>;

  type?: Maybe<DirectoryInternalTypeQueryString_2>;

  description?: Maybe<DirectoryInternalDescriptionQueryString_2>;

  owner?: Maybe<DirectoryInternalOwnerQueryString_2>;
}

export interface DirectoryInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryInternalDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectorySourceInstanceNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryRelativePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryExtensionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectorySizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryPrettySizeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryModifiedTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryAccessTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryChangeTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryBirthTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryRootQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryDirQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryBaseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryExtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryDevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryModeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryNlinkQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryUidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryGidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryRdevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryBlksizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryInoQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryBlocksQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryAtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryMtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryCtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface DirectoryAtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryMtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryCtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface DirectoryBirthtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalInputObject_2 {
  contentDigest?: Maybe<FileInternalContentDigestQueryString_2>;

  type?: Maybe<FileInternalTypeQueryString_2>;

  mediaType?: Maybe<FileInternalMediaTypeQueryString_2>;

  description?: Maybe<FileInternalDescriptionQueryString_2>;

  owner?: Maybe<FileInternalOwnerQueryString_2>;
}

export interface FileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileRelativePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileExtensionQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileSizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FilePrettySizeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileModifiedTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileAccessTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileChangeTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileBirthTimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileRootQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileDirQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileBaseQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileExtQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileNameQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileDevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileModeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileNlinkQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileUidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileGidQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileRdevQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileBlksizeQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileInoQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileBlocksQueryInteger_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FileAtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileMtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileCtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FileBirthtimeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface PublicUrlQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ImageSharpIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ImageSharpInternalInputObject_2 {
  contentDigest?: Maybe<ImageSharpInternalContentDigestQueryString_2>;

  type?: Maybe<ImageSharpInternalTypeQueryString_2>;

  owner?: Maybe<ImageSharpInternalOwnerQueryString_2>;
}

export interface ImageSharpInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ImageSharpInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ImageSharpInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTypeName_3 {
  base64?: Maybe<FixedBase64QueryString_3>;

  tracedSVG?: Maybe<FixedTracedSvgQueryString_3>;

  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_3>;

  width?: Maybe<FixedWidthQueryFloat_3>;

  height?: Maybe<FixedHeightQueryFloat_3>;

  src?: Maybe<FixedSrcQueryString_3>;

  srcSet?: Maybe<FixedSrcSetQueryString_3>;

  srcWebp?: Maybe<FixedSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_3>;

  originalName?: Maybe<FixedOriginalNameQueryString_3>;
}

export interface FixedBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedWidthQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedHeightQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FixedSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FixedOriginalNameQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTypeName_3 {
  base64?: Maybe<ResolutionsBase64QueryString_3>;

  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_3>;

  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_3>;

  width?: Maybe<ResolutionsWidthQueryFloat_3>;

  height?: Maybe<ResolutionsHeightQueryFloat_3>;

  src?: Maybe<ResolutionsSrcQueryString_3>;

  srcSet?: Maybe<ResolutionsSrcSetQueryString_3>;

  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_3>;

  originalName?: Maybe<ResolutionsOriginalNameQueryString_3>;
}

export interface ResolutionsBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsWidthQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsHeightQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResolutionsSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResolutionsOriginalNameQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTypeName_3 {
  base64?: Maybe<FluidBase64QueryString_3>;

  tracedSVG?: Maybe<FluidTracedSvgQueryString_3>;

  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_3>;

  src?: Maybe<FluidSrcQueryString_3>;

  srcSet?: Maybe<FluidSrcSetQueryString_3>;

  srcWebp?: Maybe<FluidSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_3>;

  sizes?: Maybe<FluidSizesQueryString_3>;

  originalImg?: Maybe<FluidOriginalImgQueryString_3>;

  originalName?: Maybe<FluidOriginalNameQueryString_3>;

  presentationWidth?: Maybe<FluidPresentationWidthQueryInt_3>;

  presentationHeight?: Maybe<FluidPresentationHeightQueryInt_3>;
}

export interface FluidBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FluidSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidSizesQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidOriginalImgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidOriginalNameQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface FluidPresentationWidthQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface FluidPresentationHeightQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesTypeName_3 {
  base64?: Maybe<SizesBase64QueryString_3>;

  tracedSVG?: Maybe<SizesTracedSvgQueryString_3>;

  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_3>;

  src?: Maybe<SizesSrcQueryString_3>;

  srcSet?: Maybe<SizesSrcSetQueryString_3>;

  srcWebp?: Maybe<SizesSrcWebpQueryString_3>;

  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_3>;

  sizes?: Maybe<SizesSizesQueryString_3>;

  originalImg?: Maybe<SizesOriginalImgQueryString_3>;

  originalName?: Maybe<SizesOriginalNameQueryString_3>;

  presentationWidth?: Maybe<SizesPresentationWidthQueryInt_3>;

  presentationHeight?: Maybe<SizesPresentationHeightQueryInt_3>;
}

export interface SizesBase64QueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSrcSetWebpQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesSizesQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesOriginalImgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesOriginalNameQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface SizesPresentationWidthQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface SizesPresentationHeightQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface OriginalTypeName_3 {
  width?: Maybe<OriginalWidthQueryFloat_3>;

  height?: Maybe<OriginalHeightQueryFloat_3>;

  src?: Maybe<OriginalSrcQueryString_3>;
}

export interface OriginalWidthQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface OriginalHeightQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface OriginalSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTypeName_3 {
  src?: Maybe<ResizeSrcQueryString_3>;

  tracedSVG?: Maybe<ResizeTracedSvgQueryString_3>;

  width?: Maybe<ResizeWidthQueryInt_3>;

  height?: Maybe<ResizeHeightQueryInt_3>;

  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_3>;

  originalName?: Maybe<ResizeOriginalNameQueryString_3>;
}

export interface ResizeSrcQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeTracedSvgQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ResizeWidthQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeHeightQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeAspectRatioQueryFloat_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface ResizeOriginalNameQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkIdQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalInputObject_2 {
  content?: Maybe<MarkdownRemarkInternalContentQueryString_2>;

  type?: Maybe<MarkdownRemarkInternalTypeQueryString_2>;

  contentDigest?: Maybe<MarkdownRemarkInternalContentDigestQueryString_2>;

  owner?: Maybe<MarkdownRemarkInternalOwnerQueryString_2>;

  fieldOwners?: Maybe<MarkdownRemarkInternalFieldOwnersInputObject_2>;
}

export interface MarkdownRemarkInternalContentQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalTypeQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalContentDigestQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalOwnerQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkInternalFieldOwnersInputObject_2 {
  slug?: Maybe<MarkdownRemarkInternalFieldOwnersSlugQueryString_2>;
}

export interface MarkdownRemarkInternalFieldOwnersSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterInputObject_2 {
  title?: Maybe<MarkdownRemarkFrontmatterTitleQueryString_2>;

  cover?: Maybe<MarkdownRemarkFrontmatterCoverQueryString_2>;

  date?: Maybe<MarkdownRemarkFrontmatterDateQueryString_2>;

  category?: Maybe<MarkdownRemarkFrontmatterCategoryQueryString_2>;

  tags?: Maybe<MarkdownRemarkFrontmatterTagsQueryList_2>;

  published?: Maybe<MarkdownRemarkFrontmatterPublishedQueryBoolean_2>;
}

export interface MarkdownRemarkFrontmatterTitleQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterCoverQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterDateQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterCategoryQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterTagsQueryList_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFrontmatterPublishedQueryBoolean_2 {
  eq?: Maybe<boolean>;

  ne?: Maybe<boolean>;

  in?: Maybe<(Maybe<boolean>)[]>;

  nin?: Maybe<(Maybe<boolean>)[]>;
}

export interface MarkdownRemarkRawMarkdownBodyQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface MarkdownRemarkFieldsInputObject_2 {
  slug?: Maybe<MarkdownRemarkFieldsSlugQueryString_2>;
}

export interface MarkdownRemarkFieldsSlugQueryString_2 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HtmlQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface ExcerptQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsQueryList_3 {
  elemMatch?: Maybe<HeadingsListElemTypeName_3>;
}

export interface HeadingsListElemTypeName_3 {
  value?: Maybe<HeadingsListElemValueQueryString_3>;

  depth?: Maybe<HeadingsListElemDepthQueryInt_3>;
}

export interface HeadingsListElemValueQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface HeadingsListElemDepthQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TimeToReadQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface TableOfContentsQueryString_3 {
  eq?: Maybe<string>;

  ne?: Maybe<string>;

  regex?: Maybe<string>;

  glob?: Maybe<string>;

  in?: Maybe<(Maybe<string>)[]>;

  nin?: Maybe<(Maybe<string>)[]>;
}

export interface WordCountTypeName_3 {
  paragraphs?: Maybe<WordCountParagraphsQueryInt_3>;

  sentences?: Maybe<WordCountSentencesQueryInt_3>;

  words?: Maybe<WordCountWordsQueryInt_3>;
}

export interface WordCountParagraphsQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountSentencesQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export interface WordCountWordsQueryInt_3 {
  eq?: Maybe<number>;

  ne?: Maybe<number>;

  gt?: Maybe<number>;

  gte?: Maybe<number>;

  lt?: Maybe<number>;

  lte?: Maybe<number>;

  in?: Maybe<(Maybe<number>)[]>;

  nin?: Maybe<(Maybe<number>)[]>;
}

export enum SitePageConnectionSortByFieldsEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextSlug = 'context___slug',
  ContextTag = 'context___tag',
  ContextCategory = 'context___category',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner'
}

export enum SitePageConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SitePageDistinctEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextSlug = 'context___slug',
  ContextTag = 'context___tag',
  ContextCategory = 'context___category',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner'
}

export enum SitePageGroupEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextSlug = 'context___slug',
  ContextTag = 'context___tag',
  ContextCategory = 'context___category',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner'
}

export enum SitePluginConnectionSortByFieldsEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcons = 'pluginOptions___icons',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum SitePluginConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SitePluginDistinctEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcons = 'pluginOptions___icons',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum SitePluginGroupEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcons = 'pluginOptions___icons',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum DirectoryConnectionSortByFieldsEnum {
  Id = 'id',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export enum DirectoryConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum DirectoryDistinctEnum {
  Id = 'id',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export enum DirectoryGroupEnum {
  Id = 'id',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export enum FileConnectionSortByFieldsEnum {
  Id = 'id',
  Children = 'children',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  PublicUrl = 'publicURL'
}

export enum FileConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum ExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML'
}

export enum HeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum FileDistinctEnum {
  Id = 'id',
  Children = 'children',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export enum FileGroupEnum {
  Id = 'id',
  Children = 'children',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export enum ImageSharpConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName'
}

export enum ImageSharpConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum ImageSharpDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum ImageSharpGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner'
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  InternalFieldOwnersSlug = 'internal___fieldOwners___slug',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterCover = 'frontmatter___cover',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterCategory = 'frontmatter___category',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterPublished = 'frontmatter___published',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug',
  Html = 'html',
  Excerpt = 'excerpt',
  Headings = 'headings',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words'
}

export enum MarkdownRemarkConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum MarkdownRemarkDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  InternalFieldOwnersSlug = 'internal___fieldOwners___slug',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterCover = 'frontmatter___cover',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterCategory = 'frontmatter___category',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterPublished = 'frontmatter___published',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug'
}

export enum MarkdownRemarkGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  InternalFieldOwnersSlug = 'internal___fieldOwners___slug',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterCover = 'frontmatter___cover',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterCategory = 'frontmatter___category',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterPublished = 'frontmatter___published',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug'
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

/** An object with an id, parent, and children */
export interface Node {
  /** The id of the node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  /** Connection to all SitePage nodes */
  allSitePage?: Maybe<SitePageConnection>;
  /** Connection to all SitePlugin nodes */
  allSitePlugin?: Maybe<SitePluginConnection>;
  /** Connection to all Directory nodes */
  allDirectory?: Maybe<DirectoryConnection>;
  /** Connection to all File nodes */
  allFile?: Maybe<FileConnection>;
  /** Connection to all ImageSharp nodes */
  allImageSharp?: Maybe<ImageSharpConnection>;
  /** Connection to all MarkdownRemark nodes */
  allMarkdownRemark?: Maybe<MarkdownRemarkConnection>;

  sitePage?: Maybe<SitePage>;

  sitePlugin?: Maybe<SitePlugin>;

  site?: Maybe<Site>;

  directory?: Maybe<Directory>;

  file?: Maybe<File>;

  imageSharp?: Maybe<ImageSharp>;

  markdownRemark?: Maybe<MarkdownRemark>;
}

/** A connection to a list of items. */
export interface SitePageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<SitePageGroupConnectionConnection>)[]>;
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating, are there more items? */
  hasNextPage: boolean;
}

/** An edge in a connection. */
export interface SitePageEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>;
  /** The next edge in the connection */
  next?: Maybe<SitePage>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>;
}

/** Node of type SitePage */
export interface SitePage extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  jsonName?: Maybe<string>;

  internalComponentName?: Maybe<string>;

  path?: Maybe<string>;

  component?: Maybe<string>;

  componentChunkName?: Maybe<string>;

  context?: Maybe<Context>;

  pluginCreator?: Maybe<SitePlugin>;

  pluginCreatorId?: Maybe<string>;

  componentPath?: Maybe<string>;

  internal?: Maybe<Internal_8>;
}

export interface Context {
  slug?: Maybe<string>;

  tag?: Maybe<string>;

  category?: Maybe<string>;
}

/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  resolve?: Maybe<string>;

  name?: Maybe<string>;

  version?: Maybe<string>;

  pluginOptions?: Maybe<PluginOptions_3>;

  nodeAPIs?: Maybe<(Maybe<string>)[]>;

  browserAPIs?: Maybe<(Maybe<string>)[]>;

  ssrAPIs?: Maybe<(Maybe<string>)[]>;

  pluginFilepath?: Maybe<string>;

  packageJson?: Maybe<PackageJson_2>;

  internal?: Maybe<Internal_9>;
}

export interface PluginOptions_3 {
  plugins?: Maybe<(Maybe<Plugins_2>)[]>;

  name?: Maybe<string>;

  path?: Maybe<string>;

  maxWidth?: Maybe<number>;

  linkImagesToOriginal?: Maybe<boolean>;

  short_name?: Maybe<string>;

  start_url?: Maybe<string>;

  background_color?: Maybe<string>;

  theme_color?: Maybe<string>;

  display?: Maybe<string>;

  icons?: Maybe<(Maybe<Icons_2>)[]>;

  pathCheck?: Maybe<boolean>;
}

export interface Plugins_2 {
  resolve?: Maybe<string>;

  id?: Maybe<string>;

  name?: Maybe<string>;

  version?: Maybe<string>;

  pluginOptions?: Maybe<PluginOptions_4>;

  browserAPIs?: Maybe<(Maybe<string>)[]>;

  pluginFilepath?: Maybe<string>;
}

export interface PluginOptions_4 {
  maxWidth?: Maybe<number>;

  linkImagesToOriginal?: Maybe<boolean>;
}

export interface Icons_2 {
  src?: Maybe<string>;

  sizes?: Maybe<string>;

  type?: Maybe<string>;
}

export interface PackageJson_2 {
  name?: Maybe<string>;

  description?: Maybe<string>;

  version?: Maybe<string>;

  main?: Maybe<string>;

  author?: Maybe<string>;

  license?: Maybe<string>;

  dependencies?: Maybe<(Maybe<Dependencies_2>)[]>;

  devDependencies?: Maybe<(Maybe<DevDependencies_2>)[]>;

  peerDependencies?: Maybe<(Maybe<PeerDependencies_2>)[]>;

  keywords?: Maybe<(Maybe<string>)[]>;
}

export interface Dependencies_2 {
  name?: Maybe<string>;

  version?: Maybe<string>;
}

export interface DevDependencies_2 {
  name?: Maybe<string>;

  version?: Maybe<string>;
}

export interface PeerDependencies_2 {
  name?: Maybe<string>;

  version?: Maybe<string>;
}

export interface Internal_9 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface Internal_8 {
  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  description?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>;
  /** The next edge in the connection */
  next?: Maybe<SitePage>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>;
}

/** A connection to a list of items. */
export interface SitePluginConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<SitePluginGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface SitePluginEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>;
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>;
}

/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>;
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>;
}

/** A connection to a list of items. */
export interface DirectoryConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<DirectoryEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<DirectoryGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface DirectoryEdge {
  /** The item at the end of the edge */
  node?: Maybe<Directory>;
  /** The next edge in the connection */
  next?: Maybe<Directory>;
  /** The previous edge in the connection */
  previous?: Maybe<Directory>;
}

/** Node of type Directory */
export interface Directory extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  internal?: Maybe<Internal_10>;

  sourceInstanceName?: Maybe<string>;

  absolutePath?: Maybe<string>;

  relativePath?: Maybe<string>;

  extension?: Maybe<string>;

  size?: Maybe<number>;

  prettySize?: Maybe<string>;

  modifiedTime?: Maybe<Date>;

  accessTime?: Maybe<Date>;

  changeTime?: Maybe<Date>;

  birthTime?: Maybe<Date>;

  root?: Maybe<string>;

  dir?: Maybe<string>;

  base?: Maybe<string>;

  ext?: Maybe<string>;

  name?: Maybe<string>;

  relativeDirectory?: Maybe<string>;

  dev?: Maybe<number>;

  mode?: Maybe<number>;

  nlink?: Maybe<number>;

  uid?: Maybe<number>;

  gid?: Maybe<number>;

  rdev?: Maybe<number>;

  blksize?: Maybe<number>;

  ino?: Maybe<number>;

  blocks?: Maybe<number>;

  atimeMs?: Maybe<number>;

  mtimeMs?: Maybe<number>;

  ctimeMs?: Maybe<number>;

  birthtimeMs?: Maybe<number>;

  atime?: Maybe<Date>;

  mtime?: Maybe<Date>;

  ctime?: Maybe<Date>;

  birthtime?: Maybe<Date>;
}

export interface Internal_10 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  description?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface DirectoryGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<DirectoryGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface DirectoryGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<Directory>;
  /** The next edge in the connection */
  next?: Maybe<Directory>;
  /** The previous edge in the connection */
  previous?: Maybe<Directory>;
}

/** A connection to a list of items. */
export interface FileConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<FileEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<FileGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface FileEdge {
  /** The item at the end of the edge */
  node?: Maybe<File>;
  /** The next edge in the connection */
  next?: Maybe<File>;
  /** The previous edge in the connection */
  previous?: Maybe<File>;
}

/** Node of type File */
export interface File extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;
  /** The child of this node of type markdownRemark */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  /** The child of this node of type imageSharp */
  childImageSharp?: Maybe<ImageSharp>;

  internal?: Maybe<Internal_11>;

  sourceInstanceName?: Maybe<string>;

  absolutePath?: Maybe<string>;

  relativePath?: Maybe<string>;

  extension?: Maybe<string>;

  size?: Maybe<number>;

  prettySize?: Maybe<string>;

  modifiedTime?: Maybe<Date>;

  accessTime?: Maybe<Date>;

  changeTime?: Maybe<Date>;

  birthTime?: Maybe<Date>;

  root?: Maybe<string>;

  dir?: Maybe<string>;

  base?: Maybe<string>;

  ext?: Maybe<string>;

  name?: Maybe<string>;

  relativeDirectory?: Maybe<string>;

  dev?: Maybe<number>;

  mode?: Maybe<number>;

  nlink?: Maybe<number>;

  uid?: Maybe<number>;

  gid?: Maybe<number>;

  rdev?: Maybe<number>;

  blksize?: Maybe<number>;

  ino?: Maybe<number>;

  blocks?: Maybe<number>;

  atimeMs?: Maybe<number>;

  mtimeMs?: Maybe<number>;

  ctimeMs?: Maybe<number>;

  birthtimeMs?: Maybe<number>;

  atime?: Maybe<Date>;

  mtime?: Maybe<Date>;

  ctime?: Maybe<Date>;

  birthtime?: Maybe<Date>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<string>;
}

/** Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  internal?: Maybe<Internal_12>;

  frontmatter?: Maybe<Frontmatter_2>;

  rawMarkdownBody?: Maybe<string>;

  fileAbsolutePath?: Maybe<string>;

  fields?: Maybe<Fields_2>;

  html?: Maybe<string>;

  htmlAst?: Maybe<Json>;

  excerpt?: Maybe<string>;

  headings?: Maybe<(Maybe<MarkdownHeading>)[]>;

  timeToRead?: Maybe<number>;

  tableOfContents?: Maybe<string>;

  wordCount?: Maybe<WordCount>;
}

export interface Internal_12 {
  content?: Maybe<string>;

  type?: Maybe<string>;

  contentDigest?: Maybe<string>;

  owner?: Maybe<string>;

  fieldOwners?: Maybe<FieldOwners_2>;
}

export interface FieldOwners_2 {
  slug?: Maybe<string>;
}

export interface Frontmatter_2 {
  title?: Maybe<string>;

  cover?: Maybe<File>;

  date?: Maybe<Date>;

  category?: Maybe<string>;

  tags?: Maybe<(Maybe<string>)[]>;

  published?: Maybe<boolean>;
}

export interface Fields_2 {
  slug?: Maybe<string>;
}

export interface MarkdownHeading {
  value?: Maybe<string>;

  depth?: Maybe<number>;
}

export interface WordCount {
  paragraphs?: Maybe<number>;

  sentences?: Maybe<number>;

  words?: Maybe<number>;
}

/** Node of type ImageSharp */
export interface ImageSharp extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  internal?: Maybe<Internal_13>;

  fixed?: Maybe<ImageSharpFixed>;

  resolutions?: Maybe<ImageSharpResolutions>;

  fluid?: Maybe<ImageSharpFluid>;

  sizes?: Maybe<ImageSharpSizes>;

  original?: Maybe<ImageSharpOriginal>;

  resize?: Maybe<ImageSharpResize>;
}

export interface Internal_13 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

export interface ImageSharpFixed {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio?: Maybe<number>;

  width?: Maybe<number>;

  height?: Maybe<number>;

  src?: Maybe<string>;

  srcSet?: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;

  originalName?: Maybe<string>;
}

export interface ImageSharpResolutions {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio?: Maybe<number>;

  width?: Maybe<number>;

  height?: Maybe<number>;

  src?: Maybe<string>;

  srcSet?: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;

  originalName?: Maybe<string>;
}

export interface ImageSharpFluid {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio?: Maybe<number>;

  src?: Maybe<string>;

  srcSet?: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;

  sizes?: Maybe<string>;

  originalImg?: Maybe<string>;

  originalName?: Maybe<string>;

  presentationWidth?: Maybe<number>;

  presentationHeight?: Maybe<number>;
}

export interface ImageSharpSizes {
  base64?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  aspectRatio?: Maybe<number>;

  src?: Maybe<string>;

  srcSet?: Maybe<string>;

  srcWebp?: Maybe<string>;

  srcSetWebp?: Maybe<string>;

  sizes?: Maybe<string>;

  originalImg?: Maybe<string>;

  originalName?: Maybe<string>;

  presentationWidth?: Maybe<number>;

  presentationHeight?: Maybe<number>;
}

export interface ImageSharpOriginal {
  width?: Maybe<number>;

  height?: Maybe<number>;

  src?: Maybe<string>;
}

export interface ImageSharpResize {
  src?: Maybe<string>;

  tracedSVG?: Maybe<string>;

  width?: Maybe<number>;

  height?: Maybe<number>;

  aspectRatio?: Maybe<number>;

  originalName?: Maybe<string>;
}

export interface Internal_11 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  mediaType?: Maybe<string>;

  description?: Maybe<string>;

  owner?: Maybe<string>;
}

/** A connection to a list of items. */
export interface FileGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<FileGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface FileGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<File>;
  /** The next edge in the connection */
  next?: Maybe<File>;
  /** The previous edge in the connection */
  previous?: Maybe<File>;
}

/** A connection to a list of items. */
export interface ImageSharpConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ImageSharpEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<ImageSharpGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface ImageSharpEdge {
  /** The item at the end of the edge */
  node?: Maybe<ImageSharp>;
  /** The next edge in the connection */
  next?: Maybe<ImageSharp>;
  /** The previous edge in the connection */
  previous?: Maybe<ImageSharp>;
}

/** A connection to a list of items. */
export interface ImageSharpGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<ImageSharpGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface ImageSharpGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ImageSharp>;
  /** The next edge in the connection */
  next?: Maybe<ImageSharp>;
  /** The previous edge in the connection */
  previous?: Maybe<ImageSharp>;
}

/** A connection to a list of items. */
export interface MarkdownRemarkConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<MarkdownRemarkEdge>)[]>;

  totalCount?: Maybe<number>;

  distinct?: Maybe<(Maybe<string>)[]>;

  group?: Maybe<(Maybe<MarkdownRemarkGroupConnectionConnection>)[]>;
}

/** An edge in a connection. */
export interface MarkdownRemarkEdge {
  /** The item at the end of the edge */
  node?: Maybe<MarkdownRemark>;
  /** The next edge in the connection */
  next?: Maybe<MarkdownRemark>;
  /** The previous edge in the connection */
  previous?: Maybe<MarkdownRemark>;
}

/** A connection to a list of items. */
export interface MarkdownRemarkGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<(Maybe<MarkdownRemarkGroupConnectionEdge>)[]>;

  field?: Maybe<string>;

  fieldValue?: Maybe<string>;

  totalCount?: Maybe<number>;
}

/** An edge in a connection. */
export interface MarkdownRemarkGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<MarkdownRemark>;
  /** The next edge in the connection */
  next?: Maybe<MarkdownRemark>;
  /** The previous edge in the connection */
  previous?: Maybe<MarkdownRemark>;
}

/** Node of type Site */
export interface Site extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>;

  siteMetadata?: Maybe<SiteMetadata_2>;

  port?: Maybe<Date>;

  host?: Maybe<string>;

  pathPrefix?: Maybe<string>;

  polyfill?: Maybe<boolean>;

  buildTime?: Maybe<Date>;

  internal?: Maybe<Internal_14>;
}

export interface SiteMetadata_2 {
  title?: Maybe<string>;

  siteUrl?: Maybe<string>;
}

export interface Internal_14 {
  contentDigest?: Maybe<string>;

  type?: Maybe<string>;

  owner?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

export interface AllSitePageQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<SitePageConnectionSort>;

  filter?: Maybe<FilterSitePage>;
}
export interface AllSitePluginQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<SitePluginConnectionSort>;

  filter?: Maybe<FilterSitePlugin>;
}
export interface AllDirectoryQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<DirectoryConnectionSort>;

  filter?: Maybe<FilterDirectory>;
}
export interface AllFileQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<FileConnectionSort>;

  filter?: Maybe<FilterFile>;
}
export interface AllImageSharpQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<ImageSharpConnectionSort>;

  filter?: Maybe<FilterImageSharp>;
}
export interface AllMarkdownRemarkQueryArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  sort?: Maybe<MarkdownRemarkConnectionSort>;

  filter?: Maybe<FilterMarkdownRemark>;
}
export interface SitePageQueryArgs {
  jsonName?: Maybe<SitePageJsonNameQueryString>;

  internalComponentName?: Maybe<SitePageInternalComponentNameQueryString>;

  path?: Maybe<SitePagePathQueryString_2>;

  component?: Maybe<SitePageComponentQueryString>;

  componentChunkName?: Maybe<SitePageComponentChunkNameQueryString>;

  context?: Maybe<SitePageContextInputObject>;

  pluginCreator?: Maybe<SitePagePluginCreatorInputObject>;

  pluginCreatorId?: Maybe<SitePagePluginCreatorIdQueryString_2>;

  componentPath?: Maybe<SitePageComponentPathQueryString>;

  id?: Maybe<SitePageIdQueryString_2>;

  internal?: Maybe<SitePageInternalInputObject_2>;
}
export interface SitePluginQueryArgs {
  resolve?: Maybe<SitePluginResolveQueryString_2>;

  id?: Maybe<SitePluginIdQueryString_2>;

  name?: Maybe<SitePluginNameQueryString_2>;

  version?: Maybe<SitePluginVersionQueryString_2>;

  pluginOptions?: Maybe<SitePluginPluginOptionsInputObject_2>;

  nodeAPIs?: Maybe<SitePluginNodeApIsQueryList_2>;

  browserAPIs?: Maybe<SitePluginBrowserApIsQueryList_2>;

  ssrAPIs?: Maybe<SitePluginSsrApIsQueryList_2>;

  pluginFilepath?: Maybe<SitePluginPluginFilepathQueryString_2>;

  packageJson?: Maybe<SitePluginPackageJsonInputObject_2>;

  internal?: Maybe<SitePluginInternalInputObject_2>;
}
export interface SiteQueryArgs {
  siteMetadata?: Maybe<SiteSiteMetadataInputObject_2>;

  port?: Maybe<SitePortQueryString_2>;

  host?: Maybe<SiteHostQueryString_2>;

  pathPrefix?: Maybe<SitePathPrefixQueryString_2>;

  polyfill?: Maybe<SitePolyfillQueryBoolean_2>;

  buildTime?: Maybe<SiteBuildTimeQueryString_2>;

  id?: Maybe<SiteIdQueryString_2>;

  internal?: Maybe<SiteInternalInputObject_2>;
}
export interface DirectoryQueryArgs {
  id?: Maybe<DirectoryIdQueryString_2>;

  internal?: Maybe<DirectoryInternalInputObject_2>;

  sourceInstanceName?: Maybe<DirectorySourceInstanceNameQueryString_2>;

  absolutePath?: Maybe<DirectoryAbsolutePathQueryString_2>;

  relativePath?: Maybe<DirectoryRelativePathQueryString_2>;

  extension?: Maybe<DirectoryExtensionQueryString_2>;

  size?: Maybe<DirectorySizeQueryInteger_2>;

  prettySize?: Maybe<DirectoryPrettySizeQueryString_2>;

  modifiedTime?: Maybe<DirectoryModifiedTimeQueryString_2>;

  accessTime?: Maybe<DirectoryAccessTimeQueryString_2>;

  changeTime?: Maybe<DirectoryChangeTimeQueryString_2>;

  birthTime?: Maybe<DirectoryBirthTimeQueryString_2>;

  root?: Maybe<DirectoryRootQueryString_2>;

  dir?: Maybe<DirectoryDirQueryString_2>;

  base?: Maybe<DirectoryBaseQueryString_2>;

  ext?: Maybe<DirectoryExtQueryString_2>;

  name?: Maybe<DirectoryNameQueryString_2>;

  relativeDirectory?: Maybe<DirectoryRelativeDirectoryQueryString_2>;

  dev?: Maybe<DirectoryDevQueryInteger_2>;

  mode?: Maybe<DirectoryModeQueryInteger_2>;

  nlink?: Maybe<DirectoryNlinkQueryInteger_2>;

  uid?: Maybe<DirectoryUidQueryInteger_2>;

  gid?: Maybe<DirectoryGidQueryInteger_2>;

  rdev?: Maybe<DirectoryRdevQueryInteger_2>;

  blksize?: Maybe<DirectoryBlksizeQueryInteger_2>;

  ino?: Maybe<DirectoryInoQueryInteger_2>;

  blocks?: Maybe<DirectoryBlocksQueryInteger_2>;

  atimeMs?: Maybe<DirectoryAtimeMsQueryFloat_2>;

  mtimeMs?: Maybe<DirectoryMtimeMsQueryFloat_2>;

  ctimeMs?: Maybe<DirectoryCtimeMsQueryFloat_2>;

  birthtimeMs?: Maybe<DirectoryBirthtimeMsQueryFloat_2>;

  atime?: Maybe<DirectoryAtimeQueryString_2>;

  mtime?: Maybe<DirectoryMtimeQueryString_2>;

  ctime?: Maybe<DirectoryCtimeQueryString_2>;

  birthtime?: Maybe<DirectoryBirthtimeQueryString_2>;
}
export interface FileQueryArgs {
  id?: Maybe<FileIdQueryString_2>;

  internal?: Maybe<FileInternalInputObject_2>;

  sourceInstanceName?: Maybe<FileSourceInstanceNameQueryString_2>;

  absolutePath?: Maybe<FileAbsolutePathQueryString_2>;

  relativePath?: Maybe<FileRelativePathQueryString_2>;

  extension?: Maybe<FileExtensionQueryString_2>;

  size?: Maybe<FileSizeQueryInteger_2>;

  prettySize?: Maybe<FilePrettySizeQueryString_2>;

  modifiedTime?: Maybe<FileModifiedTimeQueryString_2>;

  accessTime?: Maybe<FileAccessTimeQueryString_2>;

  changeTime?: Maybe<FileChangeTimeQueryString_2>;

  birthTime?: Maybe<FileBirthTimeQueryString_2>;

  root?: Maybe<FileRootQueryString_2>;

  dir?: Maybe<FileDirQueryString_2>;

  base?: Maybe<FileBaseQueryString_2>;

  ext?: Maybe<FileExtQueryString_2>;

  name?: Maybe<FileNameQueryString_2>;

  relativeDirectory?: Maybe<FileRelativeDirectoryQueryString_2>;

  dev?: Maybe<FileDevQueryInteger_2>;

  mode?: Maybe<FileModeQueryInteger_2>;

  nlink?: Maybe<FileNlinkQueryInteger_2>;

  uid?: Maybe<FileUidQueryInteger_2>;

  gid?: Maybe<FileGidQueryInteger_2>;

  rdev?: Maybe<FileRdevQueryInteger_2>;

  blksize?: Maybe<FileBlksizeQueryInteger_2>;

  ino?: Maybe<FileInoQueryInteger_2>;

  blocks?: Maybe<FileBlocksQueryInteger_2>;

  atimeMs?: Maybe<FileAtimeMsQueryFloat_2>;

  mtimeMs?: Maybe<FileMtimeMsQueryFloat_2>;

  ctimeMs?: Maybe<FileCtimeMsQueryFloat_2>;

  birthtimeMs?: Maybe<FileBirthtimeMsQueryFloat_2>;

  atime?: Maybe<FileAtimeQueryString_2>;

  mtime?: Maybe<FileMtimeQueryString_2>;

  ctime?: Maybe<FileCtimeQueryString_2>;

  birthtime?: Maybe<FileBirthtimeQueryString_2>;

  publicURL?: Maybe<PublicUrlQueryString_3>;
}
export interface ImageSharpQueryArgs {
  id?: Maybe<ImageSharpIdQueryString_2>;

  internal?: Maybe<ImageSharpInternalInputObject_2>;

  fixed?: Maybe<FixedTypeName_3>;

  resolutions?: Maybe<ResolutionsTypeName_3>;

  fluid?: Maybe<FluidTypeName_3>;

  sizes?: Maybe<SizesTypeName_3>;

  original?: Maybe<OriginalTypeName_3>;

  resize?: Maybe<ResizeTypeName_3>;
}
export interface MarkdownRemarkQueryArgs {
  id?: Maybe<MarkdownRemarkIdQueryString_2>;

  internal?: Maybe<MarkdownRemarkInternalInputObject_2>;

  frontmatter?: Maybe<MarkdownRemarkFrontmatterInputObject_2>;

  rawMarkdownBody?: Maybe<MarkdownRemarkRawMarkdownBodyQueryString_2>;

  fileAbsolutePath?: Maybe<MarkdownRemarkFileAbsolutePathQueryString_2>;

  fields?: Maybe<MarkdownRemarkFieldsInputObject_2>;

  html?: Maybe<HtmlQueryString_3>;

  excerpt?: Maybe<ExcerptQueryString_3>;

  headings?: Maybe<HeadingsQueryList_3>;

  timeToRead?: Maybe<TimeToReadQueryInt_3>;

  tableOfContents?: Maybe<TableOfContentsQueryString_3>;

  wordCount?: Maybe<WordCountTypeName_3>;
}
export interface DistinctSitePageConnectionArgs {
  field?: Maybe<SitePageDistinctEnum>;
}
export interface GroupSitePageConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<SitePageGroupEnum>;
}
export interface DistinctSitePluginConnectionArgs {
  field?: Maybe<SitePluginDistinctEnum>;
}
export interface GroupSitePluginConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<SitePluginGroupEnum>;
}
export interface DistinctDirectoryConnectionArgs {
  field?: Maybe<DirectoryDistinctEnum>;
}
export interface GroupDirectoryConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<DirectoryGroupEnum>;
}
export interface ModifiedTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface AccessTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface ChangeTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BirthTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface AtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface MtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BirthtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface DistinctFileConnectionArgs {
  field?: Maybe<FileDistinctEnum>;
}
export interface GroupFileConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<FileGroupEnum>;
}
export interface ModifiedTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface AccessTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface ChangeTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BirthTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface AtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface MtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface CtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BirthtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number;

  truncate?: Maybe<boolean>;

  format?: Maybe<ExcerptFormats>;
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: Maybe<HeadingLevels>;
}
export interface TableOfContentsMarkdownRemarkArgs {
  pathToSlugField?: string;

  maxDepth?: Maybe<number>;

  heading?: Maybe<string>;
}
export interface DateFrontmatter_2Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface FixedImageSharpArgs {
  width?: Maybe<number>;

  height?: Maybe<number>;

  jpegProgressive?: boolean;

  pngCompressionSpeed?: number;

  grayscale?: Maybe<boolean>;

  duotone?: Maybe<DuotoneGradient>;

  traceSVG?: Maybe<Potrace>;

  quality?: number;

  toFormat?: Maybe<ImageFormat>;

  cropFocus?: Maybe<ImageCropFocus>;

  rotate?: Maybe<number>;
}
export interface ResolutionsImageSharpArgs {
  width?: Maybe<number>;

  height?: Maybe<number>;

  jpegProgressive?: boolean;

  pngCompressionSpeed?: number;

  grayscale?: Maybe<boolean>;

  duotone?: Maybe<DuotoneGradient>;

  traceSVG?: Maybe<Potrace>;

  quality?: number;

  toFormat?: Maybe<ImageFormat>;

  cropFocus?: Maybe<ImageCropFocus>;

  rotate?: Maybe<number>;
}
export interface FluidImageSharpArgs {
  maxWidth?: Maybe<number>;

  maxHeight?: Maybe<number>;

  grayscale?: Maybe<boolean>;

  jpegProgressive?: boolean;

  pngCompressionSpeed?: number;

  duotone?: Maybe<DuotoneGradient>;

  traceSVG?: Maybe<Potrace>;

  quality?: number;

  toFormat?: Maybe<ImageFormat>;

  cropFocus?: Maybe<ImageCropFocus>;

  rotate?: Maybe<number>;

  sizes?: Maybe<string>;
  /** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
  srcSetBreakpoints?: (Maybe<number>)[];
}
export interface SizesImageSharpArgs {
  maxWidth?: Maybe<number>;

  maxHeight?: Maybe<number>;

  grayscale?: Maybe<boolean>;

  jpegProgressive?: boolean;

  pngCompressionSpeed?: number;

  duotone?: Maybe<DuotoneGradient>;

  traceSVG?: Maybe<Potrace>;

  quality?: number;

  toFormat?: Maybe<ImageFormat>;

  cropFocus?: Maybe<ImageCropFocus>;

  rotate?: Maybe<number>;

  sizes?: Maybe<string>;
  /** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
  srcSetBreakpoints?: (Maybe<number>)[];
}
export interface ResizeImageSharpArgs {
  width?: Maybe<number>;

  height?: Maybe<number>;

  quality?: number;

  jpegProgressive?: boolean;

  pngCompressionLevel?: number;

  pngCompressionSpeed?: number;

  grayscale?: Maybe<boolean>;

  duotone?: Maybe<DuotoneGradient>;

  base64?: Maybe<boolean>;

  traceSVG?: Maybe<Potrace>;

  toFormat?: Maybe<ImageFormat>;

  cropFocus?: Maybe<ImageCropFocus>;

  rotate?: Maybe<number>;
}
export interface DistinctImageSharpConnectionArgs {
  field?: Maybe<ImageSharpDistinctEnum>;
}
export interface GroupImageSharpConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<ImageSharpGroupEnum>;
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: Maybe<MarkdownRemarkDistinctEnum>;
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: Maybe<number>;

  limit?: Maybe<number>;

  field?: Maybe<MarkdownRemarkGroupEnum>;
}
export interface PortSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
export interface BuildTimeSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>;
}
