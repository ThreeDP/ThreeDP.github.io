import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: string;
  link?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Desenvolvedor backend na Ticket',
    Svg: "♥️",
    description: (
      <ul className={styles.listHome}>
        <li><b>.NET: </b> em arquitetura de microserviços, CQRS, DDD e clean arquitecture.</li>
        <li><b>Datadog: </b>focando em monitoramento/alertas, logs e trace para resolução de problemas e APM perfomance da aplicação.</li>
        <li><b>Azure Cloud: </b>para orquestrar containers com K8S, azure service bus para filas/tópicos e AD B2C com auth/.</li>
        <li><b>Azure Devops: </b>aplicando metodologia SCRUM para gestão de projeto e CI/CD para deploy na Azure.</li>
      </ul>
    ),
  },
  {
    title: 'Projeto Pessoal @Pung',
    Svg: "🏓",
    link: "https://davypaulino.me/Pung/",
    description: (
      <ul className={styles.listHome}>
        <li><b>Django: </b> para o desenvolvimento das apis e consumers.</li>
        <li><b>Docker Compose: </b>para orquestrar containers e provisionar a aplicação.</li>
        <li><b>Redis: </b>para cache e gestão minimalista das filas responsaveis pelo estado do jogo.</li>
        <li><b>Nginx: </b>como loadbalance e proxy.</li>
        <li><b>Nextjs: </b>para construção do frontend.</li>
        <li><b>Git e Github: </b>para construção de pipelines e versionamento de software.</li>
      </ul>
    ),
  }
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <p style={{ fontSize: "60px", textShadow: "3px 3px 5px rgba(0, 0, 0.1, 0.2)" }}>{Svg}</p>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        {description}
        {link !== null ? <a href={`link`}>{link}</a> : ""}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
