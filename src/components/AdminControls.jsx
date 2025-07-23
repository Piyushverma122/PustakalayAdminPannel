import React from 'react';

const AdminControls = ({ onEdit, onDelete, onApprove, status, itemId, itemType = 'donor' }) => {
  return (
    <div className="flex space-x-2">
      {/* Edit Button */}
      <button
        onClick={() => onEdit(itemId)}
        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors group"
        title="संपादित करें"
      >
        <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>

      {/* Approve/Reject Button (only for donors) */}
      {itemType === 'donor' && (
        <button
          onClick={() => onApprove(itemId, status)}
          className={`p-2 rounded-lg transition-colors group ${
            status === 'approved' 
              ? 'text-orange-600 hover:bg-orange-50' 
              : 'text-green-600 hover:bg-green-50'
          }`}
          title={status === 'approved' ? 'अस्वीकार करें' : 'स्वीकार करें'}
        >
          {status === 'approved' ? (
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      )}

      {/* Delete Button */}
      <button
        onClick={() => onDelete(itemId)}
        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors group"
        title="हटाएं"
      >
        <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default AdminControls;
