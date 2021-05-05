import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

  return (
    <header className={styles.experienceBar}>
      <p className={styles.experienceBarTitle}>
        <span>Experiência</span>
        <span>{currentExperience} / {experienceToNextLevel} xp</span>
      </p>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
      </div>
    </header>
  );
}