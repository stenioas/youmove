import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/stenioas.png" alt="Avatar"/>
      <div>
        <strong>Stenio Almeida</strong>
        <p>
          Nível {level}
          <img src="icons/level.svg" alt="Level" />
        </p>
      </div>
    </div>
  );
}