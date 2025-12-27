import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function Card({ id = 0, session = {} }) {
    const { handleDelete, handleEdit, toggleComplete } = useContext(TodoContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editSubject, setEditSubject] = useState(session.subject);
    const [editTopic, setEditTopic] = useState(session.topic);
    const [editDuration, setEditDuration] = useState(session.duration);
    const [editPriority, setEditPriority] = useState(session.priority);

    const priorityColors = {
        low: "bg-green-100 text-green-800 border-green-200",
        medium: "bg-green-200 text-green-900 border-green-300",
        high: "bg-green-300 text-green-900 border-green-400"
    };

    const priorityDots = {
        low: "bg-green-400",
        medium: "bg-green-500",
        high: "bg-green-700"
    };

    function saveEdit() {
        if (editSubject.trim() && editTopic.trim() && editDuration) {
            handleEdit(id, {
                subject: editSubject,
                topic: editTopic,
                duration: parseInt(editDuration),
                priority: editPriority
            });
            setIsEditing(false);
        }
    }

    function cancelEdit() {
        setEditSubject(session.subject);
        setEditTopic(session.topic);
        setEditDuration(session.duration);
        setEditPriority(session.priority);
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <div className="bg-white p-6 rounded-xl border-2 border-green-200 shadow-md">
                <div className="space-y-3">
                    <input
                        className="w-full border border-green-200 p-2 rounded-lg bg-green-50"
                        value={editSubject}
                        onChange={(e) => setEditSubject(e.target.value)}
                        placeholder="Subject"
                    />
                    <input
                        className="w-full border border-green-200 p-2 rounded-lg bg-green-50"
                        value={editTopic}
                        onChange={(e) => setEditTopic(e.target.value)}
                        placeholder="Topic"
                    />
                    <input
                        className="w-full border border-green-200 p-2 rounded-lg bg-green-50"
                        type="number"
                        value={editDuration}
                        onChange={(e) => setEditDuration(e.target.value)}
                        placeholder="Duration"
                    />
                    <select
                        className="w-full border border-green-200 p-2 rounded-lg bg-green-50"
                        value={editPriority}
                        onChange={(e) => setEditPriority(e.target.value)}
                    >
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                    </select>
                    <div className="flex gap-2 justify-end pt-2">
                        <button
                            onClick={saveEdit}
                            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                        >
                            Save
                        </button>
                        <button
                            onClick={cancelEdit}
                            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border-l-4 ${
            session.completed ? 'border-green-500 opacity-75' : 'border-green-400'
        }`}>
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <span className={`w-3 h-3 rounded-full ${priorityDots[session.priority]}`}></span>
                        <h3 className={`text-xl font-bold text-green-800 ${session.completed ? 'line-through' : ''}`}>
                            {session.subject}
                        </h3>
                    </div>
                    <p className={`text-green-700 ml-5 ${session.completed ? 'line-through' : ''}`}>
                        {session.topic}
                    </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase border ${priorityColors[session.priority]}`}>
                    {session.priority}
                </span>
            </div>
            <div className="flex items-center gap-4 mb-4 text-sm text-green-600 ml-5">
                <span className="flex items-center gap-1">
                    ⏱️ {session.duration} min
                </span>
            </div>
            <div className="flex gap-2 justify-end">
                <button
                    onClick={() => toggleComplete(id)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                        session.completed
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-green-50 text-green-700 hover:bg-green-100'
                    }`}
                >
                    {session.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition font-medium"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDelete(id)}
                    className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition font-medium"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Card;