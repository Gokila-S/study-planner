import { useContext } from "react";
import Card from "../components/Card";
import TodoContext from "../context/TodoContext";

function TodoPage() {
    const {
        subject,
        setSubject,
        topic,
        setTopic,
        duration,
        setDuration,
        priority,
        setPriority,
        items,
        handleAdd,
    } = useContext(TodoContext);

    return (
        <main className="w-[90vw] flex justify-start items-start gap-8 p-4 bg-green-50 min-h-[80vh]">
            <section className="min-h-[60vh] w-1/3 bg-white shadow-lg p-8 rounded-2xl border border-green-100">
                <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Add Study Session</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-green-800 mb-1">Subject</label>
                        <input
                            className="w-full bg-green-50 border border-green-200 text-green-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            type="text"
                            placeholder="e.g., Mathematics"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-green-800 mb-1">Topic</label>
                        <input
                            className="w-full bg-green-50 border border-green-200 text-green-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            type="text"
                            placeholder="e.g., Calculus - Derivatives"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-green-800 mb-1">Duration (minutes)</label>
                        <input
                            className="w-full bg-green-50 border border-green-200 text-green-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            type="number"
                            min="1"
                            placeholder="e.g., 45"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-green-800 mb-1">Priority</label>
                        <select
                            className="w-full bg-green-50 border border-green-200 text-green-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition cursor-pointer"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <button
                        onClick={handleAdd}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-6"
                    >
                        Add Study Session
                    </button>
                </div>
            </section>
            <section className="w-2/3">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Your Study Plan</h2>
                {items.length === 0 ? (
                    <div className="text-center py-12 bg-green-50 rounded-xl border-2 border-dashed border-green-200">
                        <p className="text-green-500 text-lg">No study sessions yet. Start planning!</p>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {items.map((session, index) => (
                            <Card
                                key={index}
                                id={index}
                                session={session}
                            />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
export default TodoPage;