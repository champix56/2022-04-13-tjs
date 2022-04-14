import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeThumbnail.module.css";
import ThumbnailLayout from "../../layout/ThumbnailLayout/ThumbnailLayout";
import MemeViewer from "../../ui/MemeViewer/MemeViewer";
import { Link } from "react-router-dom";

const MemeThumbnail = (props) => (
  <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
    <ThumbnailLayout>
      {props.memes.map((e, i) => (
        <Link to={`/editor/${e.id}`} key={i}>
          <MemeViewer
            meme={e}
            image={props.images.find((img) => img.id === e.imageId)}
          />
        </Link>
      ))}
    </ThumbnailLayout>
  </div>
);

MemeThumbnail.propTypes = {
  memes: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
};

export default MemeThumbnail;
