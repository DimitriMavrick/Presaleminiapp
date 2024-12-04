import { FunctionComponent, useCallback } from 'react';
import styles from '../css_modules/Stack.module.css';
import {images} from '../StoreImages/StoreImages';



const Stack:FunctionComponent = () => {
  	
  	const onHomeButtonIconClick = useCallback(() => {
    		// Add your code here
  	}, []);



  	return (
    		<div className={styles.stack9}>
      			<img className={styles.buttonsBackground} alt="" src={images.ButtonsBackground}  />
      			<img className={styles.homeButtonIcon} alt="" src={images.HomeButton}  onClick={onHomeButtonIconClick} />
				<img className={styles.notificationButtonIcon} alt="" src={images.NotificationButton} />
      			<img className={styles.stackButtonIcon} alt="" src={images.StackButton} />
      			<img className={styles.icoButtonIcon} alt="" src={images.ICOButton} onClick={onHomeButtonIconClick} />
      			<img className={styles.nftButtonIcon} alt="" src={images.NFTButton}  onClick={onHomeButtonIconClick} />
      			<img className={styles.cursorBendIcon} alt="" src={images.cursorbend} />
      			<div className={styles.cursorButton} />
      			<img className={styles.stackimageIcon} alt="" src={images.StackImage}/>
      			<img className={styles.stackBack1Icon} alt="" src={images.stackback1} />
      			<img className={styles.stackBack2Icon} alt="" src={images.stackback2} />
      			<div className={styles.comingSoonBackRectangle} />
      			<div className={styles.earnRewardsEffortlesslyContainer}>
        				<p className={styles.earnRewardsEffortlesslyWith}>
          					<span className={styles.earn}>Earn</span>
          					<span>{` rewards effortlessly with `}</span>
        				</p>
        				<p className={styles.earnRewardsEffortlesslyWith}>
          					<span>{`our upcoming `}</span>
          					<span className={styles.earn}>staking</span>
          					<span className={styles.options}> options!</span>
        				</p>
      			</div>
      			<img className={styles.comingSoonIcon} alt="" src={images.ComingSoon} />
    		</div>);
};

export default Stack;