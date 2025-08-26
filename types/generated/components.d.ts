import type { Schema, Struct } from '@strapi/strapi';

export interface CustomAdditionalSecurityMeasures
  extends Struct.ComponentSchema {
  collectionName: 'components_custom_additional_security_measures';
  info: {
    displayName: 'additionalSecurityMeasures';
  };
  attributes: {
    item: Schema.Attribute.Text;
  };
}

export interface CustomAdvancedReporting extends Struct.ComponentSchema {
  collectionName: 'components_custom_advanced_reportings';
  info: {
    displayName: 'advanced-reporting';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface CustomCapabilities extends Struct.ComponentSchema {
  collectionName: 'components_custom_capabilities';
  info: {
    displayName: 'capabilities';
  };
  attributes: {
    txt: Schema.Attribute.String;
  };
}

export interface CustomCrmFeatures extends Struct.ComponentSchema {
  collectionName: 'components_custom_crm_features';
  info: {
    displayName: 'crm-features';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface CustomDevopsfeatures extends Struct.ComponentSchema {
  collectionName: 'components_custom_devopsfeatures';
  info: {
    displayName: 'Devopsfeatures';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface CustomErpfeatures extends Struct.ComponentSchema {
  collectionName: 'components_custom_erpfeatures';
  info: {
    displayName: 'erpfeatures';
  };
  attributes: {
    txt: Schema.Attribute.String;
  };
}

export interface CustomFeatures extends Struct.ComponentSchema {
  collectionName: 'components_custom_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    feature: Schema.Attribute.String;
  };
}

export interface CustomFeaturesServerManagement extends Struct.ComponentSchema {
  collectionName: 'components_custom_features_server_managements';
  info: {
    displayName: 'features-server-management';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface CustomItems extends Struct.ComponentSchema {
  collectionName: 'components_custom_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface CustomLimitations extends Struct.ComponentSchema {
  collectionName: 'components_custom_limitations';
  info: {
    displayName: 'limitations';
  };
  attributes: {
    limits: Schema.Attribute.String;
  };
}

export interface CustomRequirements extends Struct.ComponentSchema {
  collectionName: 'components_custom_requirements';
  info: {
    displayName: 'Requirements';
  };
  attributes: {
    Requirements: Schema.Attribute.String;
  };
}

export interface CustomSeo extends Struct.ComponentSchema {
  collectionName: 'components_custom_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    keywords: Schema.Attribute.RichText;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    shareImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface CustomServerCareFeature extends Struct.ComponentSchema {
  collectionName: 'components_custom_server_care_features';
  info: {
    displayName: 'serverCareFeature';
  };
  attributes: {
    features: Schema.Attribute.String;
  };
}

export interface CustomServerhardening extends Struct.ComponentSchema {
  collectionName: 'components_custom_serverhardenings';
  info: {
    displayName: 'serverhardening';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface CustomTags extends Struct.ComponentSchema {
  collectionName: 'components_custom_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface CustomTechUsed extends Struct.ComponentSchema {
  collectionName: 'components_custom_tech_useds';
  info: {
    displayName: 'techUsed';
  };
  attributes: {
    technologies: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'custom.additional-security-measures': CustomAdditionalSecurityMeasures;
      'custom.advanced-reporting': CustomAdvancedReporting;
      'custom.capabilities': CustomCapabilities;
      'custom.crm-features': CustomCrmFeatures;
      'custom.devopsfeatures': CustomDevopsfeatures;
      'custom.erpfeatures': CustomErpfeatures;
      'custom.features': CustomFeatures;
      'custom.features-server-management': CustomFeaturesServerManagement;
      'custom.items': CustomItems;
      'custom.limitations': CustomLimitations;
      'custom.requirements': CustomRequirements;
      'custom.seo': CustomSeo;
      'custom.server-care-feature': CustomServerCareFeature;
      'custom.serverhardening': CustomServerhardening;
      'custom.tags': CustomTags;
      'custom.tech-used': CustomTechUsed;
    }
  }
}
