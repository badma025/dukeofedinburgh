import BounceLoader from "react-spinners/BounceLoader";
import styles from "../../styles/Loading.module.css"

function Loading() {
  return (

      <div className={styles.centered}>
        <BounceLoader
          className="p-0"
          color="#1778f2"
          loading={true}
          size={150}
        />
      </div>
  );
}

export default Loading;
