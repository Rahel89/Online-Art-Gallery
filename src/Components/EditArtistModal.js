import React, { useEffect } from 'react';

const EditArtistModal = ({ showModal, artist, onClose, onSave }) => {
    const [formData, setFormData] = React.useState({});
  
    useEffect(() => {
      setFormData({ ...artist }); // Update form data when artist changes
    }, [artist]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
    };
  
    const handleOutsideClick = (e) => {
      // Check if the click is on the modal backdrop
      if (e.target.classList.contains('modal')) {
        console.log("Modal backdrop clicked");
        onClose();
      }
    };
  
    if (!showModal) return null;
  
    return (
      <div className="modal show" style={{ display: 'block' }} onClick={handleOutsideClick}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Artist</h5>
              <button type="button" className="close" onClick={onClose} aria-label="Close">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Fname"
                    value={formData.Fname || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Lname"
                    value={formData.Lname || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone_number"
                    value={formData.phone_number || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={onClose}>
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default EditArtistModal;