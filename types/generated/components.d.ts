import type { Schema, Attribute } from '@strapi/strapi';

export interface VariantsVariantColor extends Schema.Component {
  collectionName: 'components_variants_variant_colors';
  info: {
    displayName: 'Variant Color';
    description: '';
  };
  attributes: {
    Color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface VariantsService extends Schema.Component {
  collectionName: 'components_variants_services';
  info: {
    displayName: 'service';
    icon: 'key';
  };
  attributes: {
    term_name: Attribute.String;
    period: Attribute.String;
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
    price: Attribute.Float;
    features: Attribute.Relation<
      'variants.car-variant',
      'oneToMany',
      'api::feature.feature'
    >;
    arai_mileage: Attribute.String;
    body_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::body-type.body-type'
    >;
    engine_displacement: Attribute.String;
    no_of_cylinders: Attribute.String;
    maximum_power: Attribute.String;
    maximum_torque: Attribute.String;
    fuel_tank_capacity: Attribute.String;
    ground_clearance: Attribute.String;
    engine_type: Attribute.String;
    gearbox: Attribute.String;
    drive_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::drive-type.drive-type'
    >;
    alloy_wheel_size: Attribute.String;
    front_suspension: Attribute.String;
    rear_suspension: Attribute.String;
    front_brake_type: Attribute.String;
    rear_brake_type: Attribute.String;
    variant_color: Attribute.Component<'variants.variant-color', true>;
    continue_base_colors: Attribute.Boolean & Attribute.DefaultTo<true>;
    exteriors: Attribute.Relation<
      'variants.car-variant',
      'oneToMany',
      'api::exterior.exterior'
    >;
    interiors: Attribute.Relation<
      'variants.car-variant',
      'oneToMany',
      'api::interior.interior'
    >;
    safeties: Attribute.Relation<
      'variants.car-variant',
      'oneToMany',
      'api::safety.safety'
    >;
    transmission_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::transmission-type.transmission-type'
    >;
    battery_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::battery-type.battery-type'
    >;
    brake_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::brake-type.brake-type'
    >;
    charging_option: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::charging-option.charging-option'
    >;
    charging_port: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::charging-port.charging-port'
    >;
    charging_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::charging-type.charging-type'
    >;
    chassis_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::chassis-type.chassis-type'
    >;
    cooling_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::cooling-type.cooling-type'
    >;
    emission_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::emission-type.emission-type'
    >;
    gear_box: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::gear-box.gear-box'
    >;
    motor_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::motor-type.motor-type'
    >;
    wheel_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::wheel-type.wheel-type'
    >;
    tyre_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::tyre-type.tyre-type'
    >;
    suspension: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::suspension.suspension'
    >;
    steering_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::steering-type.steering-type'
    >;
    charging_time: Attribute.String;
    boot_space: Attribute.String;
    top_speed: Attribute.String;
    battery_capacity: Attribute.String;
    range: Attribute.String;
    motor_power: Attribute.String;
    turning_radius: Attribute.String;
    emission_norm_compliance: Attribute.String;
    charging_time_ac: Attribute.String;
    charging_time_dc: Attribute.String;
    battery_warranty: Attribute.String;
    motor_warranty: Attribute.String;
    vehicle_warranty: Attribute.String;
    stardard_waranty: Attribute.String;
    valve_per_cylinder: Attribute.String;
    reserved_fuel_capacity: Attribute.String;
    riding_modes: Attribute.String;
    clutch: Attribute.String;
    bore: Attribute.String;
    stroke: Attribute.String;
    starting: Attribute.String;
    braking_system: Attribute.String;
    service: Attribute.Component<'variants.service'>;
    fuel_type: Attribute.Relation<
      'variants.car-variant',
      'oneToOne',
      'api::fuel-type.fuel-type'
    >;
  };
}

export interface VariantsCarInterior extends Schema.Component {
  collectionName: 'components_variants_car_interiors';
  info: {
    displayName: 'Car Interior';
  };
  attributes: {
    interiors: Attribute.Relation<
      'variants.car-interior',
      'oneToMany',
      'api::interior.interior'
    >;
  };
}

export interface VariantsCarExterior extends Schema.Component {
  collectionName: 'components_variants_car_exteriors';
  info: {
    displayName: 'Car Exterior';
  };
  attributes: {
    exteriors: Attribute.Relation<
      'variants.car-exterior',
      'oneToMany',
      'api::exterior.exterior'
    >;
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

export interface PromotionalBannerPromotionalBanner extends Schema.Component {
  collectionName: 'components_promotional_banner_promotions';
  info: {
    displayName: 'Promotional Banner';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
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

export interface FeaturesFeatureAvailable extends Schema.Component {
  collectionName: 'components_features_feature_availables';
  info: {
    displayName: 'Feature Available';
    description: '';
  };
  attributes: {
    features: Attribute.Relation<
      'features.feature-available',
      'oneToMany',
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

export interface DimensionWeightDimensionAndWeight extends Schema.Component {
  collectionName: 'components_dimension_weight_dimension_and_weights';
  info: {
    displayName: 'Dimension and Weight';
    icon: 'puzzle';
    description: '';
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
    approch_angle: Attribute.String;
    departure_angle: Attribute.String;
    break_over_angle: Attribute.String;
  };
}

export interface ColorsColorsAvailabe extends Schema.Component {
  collectionName: 'components_colors_colors_availabes';
  info: {
    displayName: 'Colors Availabe';
    description: '';
  };
  attributes: {
    Color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    thumbnail: Attribute.Media<'images'>;
  };
}

export interface CarSafetyName extends Schema.Component {
  collectionName: 'components_car_safety_names';
  info: {
    displayName: 'name';
    description: '';
  };
  attributes: {
    safeties: Attribute.Relation<
      'car-safety.name',
      'oneToMany',
      'api::safety.safety'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'variants.variant-color': VariantsVariantColor;
      'variants.service': VariantsService;
      'variants.car-variant': VariantsCarVariant;
      'variants.car-interior': VariantsCarInterior;
      'variants.car-exterior': VariantsCarExterior;
      'promotional-features.promotional-features': PromotionalFeaturesPromotionalFeatures;
      'promotional-banner.promotional-banner': PromotionalBannerPromotionalBanner;
      'home-slider.home-slider': HomeSliderHomeSlider;
      'features.feature-available': FeaturesFeatureAvailable;
      'faq.faq': FaqFaq;
      'dimension-weight.dimension-and-weight': DimensionWeightDimensionAndWeight;
      'colors.colors-availabe': ColorsColorsAvailabe;
      'car-safety.name': CarSafetyName;
    }
  }
}
