import { BiLogoPostgresql } from 'react-icons/bi';
import { DiMysql, DiRedis } from 'react-icons/di';
import {
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { GrGraphQl } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io';
import {
  SiAmazoneks,
  SiAmazonrds,
  SiAmazonsqs,
  SiAngular,
  SiAnsible,
  SiDjango,
  SiExpress,
  SiGithubactions,
  SiHelm,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiNginx,
  SiRabbitmq,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si';

export function getIcon(name: string, className?: string) {
  switch (name.toLowerCase()) {
    case 'javascript':
      return <IoLogoJavascript className={className} />;
    case 'html':
      return <FaHtml5 className={className} />;
    case 'css':
      return <FaCss3 className={className} />;
    case 'typescript':
      return <SiTypescript className={className} />;
    case 'react':
      return <FaReact className={className} />;
    case 'angular':
      return <SiAngular className={className} />;
    case 'nodejs':
      return <FaNodeJs className={className} />;
    case 'jest':
      return <SiJest className={className} />;
    case 'expressjs':
      return <SiExpress className={className} />;
    case 'graphql':
      return <GrGraphQl className={className} />;
    case 'python':
      return <FaPython className={className} />;
    case 'django':
      return <SiDjango className={className} />;
    case 'golang':
      return <FaGolang className={className} />;
    case 'java':
      return <FaJava className={className} />;
    case 'springboot':
      return <SiSpringboot className={className} />;
    case 'mysql':
      return <DiMysql className={className} />;
    case 'postgresql':
      return <BiLogoPostgresql className={className} />;
    case 'mongodb':
      return <SiMongodb className={className} />;
    case 'amazonrds':
      return <SiAmazonrds className={className} />;
    case 'git':
      return <FaGitAlt className={className} />;
    case 'redis':
      return <DiRedis className={className} />;
    case 'rabbitmq':
      return <SiRabbitmq className={className} />;
    case 'ansible':
      return <SiAnsible className={className} />;
    case 'docker':
      return <FaDocker className={className} />;
    case 'kubernetes':
      return <SiKubernetes className={className} />;
    case 'nginx':
      return <SiNginx className={className} />;
    case 'helm':
      return <SiHelm className={className} />;
    case 'sqs':
      return <SiAmazonsqs className={className} />;
    case 'eks':
      return <SiAmazoneks className={className} />;
    case 'githubactions':
      return <SiGithubactions className={className} />;
    default:
      return <></>;
    // return <FaGitAlt className={className} />;
    // return <SiGithubactions className={className} />;
  }
}
