import { FC, useState, useEffect } from "react";
import { Button, Modal } from "antd";

interface Props {
  vector: any;
}
const VectorModal: FC<Props> = ({ vector }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [error, setError] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <span className="btn btn-sm btn-success" onClick={showModal}>
        View Vector
      </span>
      <Modal
        title="Vector"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="row">
          <div className="col-12 text-center">{vector}</div>
        </div>
      </Modal>
    </>
  );
};
export default VectorModal;
