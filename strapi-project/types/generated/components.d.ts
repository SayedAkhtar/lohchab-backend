import type { Schema, Attribute } from '@strapi/strapi';

export interface PromotionalBannerPromotionalBanner extends Schema.Component {
  collectionName: 'components_promotional_banner_promotions';
  info: {
    displayName: 'Promotional Banner';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    promotional_features: Attribute.Component<
      'promotional-features.promotional-features',
      true
    > &
      Attribute.Required;
    promotional_media: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Attribute.Required;
  };
}

export interface HomeSliderHomeSlider extends Schema.Component {
  collectionName: 'components_home_slider_home_sliders';
  info: {
    displayName: 'Home Slider';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    button_one_link: Attribute.String;
    button_two_link: Attribute.String;
  };
}

export interface VariantsCarVariant extends Schema.Component {
  collectionName: 'components_variants_car_variants';
  info: {
    displayName: 'Car Variant';
    icon: 'database';
    description: '';
  };
  attributes: {
    VariantName: Attribute.String;
    EngineCapacity: Attribute.String;
    Milage: Attribute.String;
    transmission_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::transmission-type.transmission-type'
    >;
    price: Attribute.Float;
    fuel_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::fuel-type.fuel-type'
    >;
    features: Attribute.Component<'features.feature-available', true>;
  };
}

export interface PromotionalFeaturesPromotionalFeatures
  extends Schema.Component {
  collectionName: 'components_promotional_features_promotional_features';
  info: {
    displayName: 'Promotional Features';
  };
  attributes: {
    items: Attribute.String & Attribute.Required;
  };
}

export interface DimensionWeightDimensionAndWeight extends Schema.Component {
  collectionName: 'components_dimension_weight_dimension_and_weights';
  info: {
    displayName: 'Dimension and Weight';
    icon: 'puzzle';
  };
  attributes: {
    Bootspace: Attribute.String;
    Doors: Attribute.String;
    FuelCapacity: Attribute.String;
    GroundClearance: Attribute.String;
    Height: Attribute.String;
    KerbWeight: Attribute.String;
    Length: Attribute.String;
    Number_Of_Seating_Rows: Attribute.String;
    SeatingCapacity: Attribute.String;
    Wheelbase: Attribute.String;
    Width: Attribute.String;
    show: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ColorsColorsAvailabe extends Schema.Component {
  collectionName: 'components_colors_colors_availabes';
  info: {
    displayName: 'Colors Availabe';
  };
  attributes: {
    Color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface FeaturesFeatureAvailable extends Schema.Component {
  collectionName: 'components_features_feature_availables';
  info: {
    displayName: 'Feature Available';
  };
  attributes: {
    feature: Attribute.Relation<
      'features.feature-available',
      'oneToOne',
      'api::feature.feature'
    >;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.Blocks & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'promotional-banner.promotional-banner': PromotionalBannerPromotionalBanner;
      'home-slider.home-slider': HomeSliderHomeSlider;
      'variants.car-variant': VariantsCarVariant;
      'promotional-features.promotional-features': PromotionalFeaturesPromotionalFeatures;
      'dimension-weight.dimension-and-weight': DimensionWeightDimensionAndWeight;
      'colors.colors-availabe': ColorsColorsAvailabe;
      'features.feature-available': FeaturesFeatureAvailable;
      'faq.faq': FaqFaq;
    }
  }
}
