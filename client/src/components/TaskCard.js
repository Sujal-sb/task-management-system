import React from 'react';

export default function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  const priorityColors = {
    High: 'text-red-600 bg-red-100',
    Medium: 'text-yellow-600 bg-yellow-100',
    Low: 'text-green-600 bg-green-100',
  };

  const statusColors = {
    Pending: 'bg-gray-200 text-gray-800',
    'In Progress': 'bg-blue-200 text-blue-800',
    Completed: 'bg-green-200 text-green-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
          {task.description && (
            <p className="text-gray-600 text-sm mt-1">{task.description}</p>
          )}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(task)}
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="text-red-500 hover:text-red-700 font-semibold"
          >
            🗑️
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityColors[task.priority]}`}>
          {task.priority} Priority
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[task.status]}`}>
          {task.status}
        </span>
        {task.category && (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
            {task.category}
          </span>
        )}
      </div>

      {task.dueDate && (
        <p className="text-sm text-gray-500 mb-3">
          📅 Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}

      <div className="flex space-x-2">
        {task.status !== 'Completed' && (
          <button
            onClick={() => onStatusChange(task._id, 'Completed')}
            className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
          >
            Mark Complete
          </button>
        )}
        {task.status !== 'In Progress' && (
          <button
            onClick={() => onStatusChange(task._id, 'In Progress')}
            className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
}
