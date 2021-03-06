import styles from "./Features.module.scss";
import Feature from "./Feature";
import FeaturesData from "./Features.json";

interface FeatureDataType extends Record<string, string> {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

let jsonFeatures: FeatureDataType[] = FeaturesData;

export const Features = () => {
  return (
    <div className={styles.features}>
      {jsonFeatures.map((feature, index) => (
        <Feature
          key={index}
          icon={feature.icon}
          title={feature.title}
          subtitle={feature.subtitle}
          description={feature.description}
        ></Feature>
      ))}
    </div>
  );
};
export default Features;
