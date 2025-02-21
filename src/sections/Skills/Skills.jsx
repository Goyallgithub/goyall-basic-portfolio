import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
   
      <div className={styles.skillList}>
        <h1>Some Likes</h1>
        <SkillList src={checkMarkIcon} skill="Startup" />
        <SkillList src={checkMarkIcon} skill="Novels" />
        <SkillList src={checkMarkIcon} skill="Music" />
        <SkillList src={checkMarkIcon} skill="Basketball" />
        <SkillList src={checkMarkIcon} skill="Deep Convo's" />
      </div>
      <hr />
      <div className={styles.skillList}>
       <SkillList src={checkMarkIcon} skill="HTML and CSS" />
        <SkillList src={checkMarkIcon} skill="JS" />
        <SkillList src={checkMarkIcon} skill="Front-end" />
        <SkillList src={checkMarkIcon} skill="ML" />
        <h1>Tech</h1>
       
      </div>
      <hr />
      {/* <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div> */}
    </section>
  );
}

export default Skills;
