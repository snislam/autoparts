import React from 'react';

const ConfirmationModal = () => {

    return (
        <div>
            <input type="checkbox" id="confirmation-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are sure to delete this?</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button className='btn btn-warning'>Confirm</button>
                        <button className='btn btn-neutral'>Cancel</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ConfirmationModal;