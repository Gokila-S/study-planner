import { createContext, useContext, useEffect, useState } from "react";
import storageService from "../services/storageService";
import AuthContext from "./AuthContext";

const TodoContext = createContext();

function TodoProvider({ children }) {
    const [subject, setSubject] = useState("");
    const [topic, setTopic] = useState("");
    const [duration, setDuration] = useState("");
    const [priority, setPriority] = useState("medium");
    const [items, setItems] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        const data = storageService.getData();
        setItems(data.items[user] ?? []);
    }, []);

    useEffect(() => {
        // do save
        if (items.length !== 0) {
            const data = storageService.getData();
            data.items[user] = items;
            storageService.saveData(data);
        }
    }, [items]);

    function handleAdd() {
        if (subject.trim() !== "" && topic.trim() !== "" && duration.trim() !== "") {
            const obj = {
                subject,
                topic,
                duration: parseInt(duration),
                priority,
                completed: false,
                createdAt: new Date().toISOString()
            };
            setItems([...items, obj]);
            setSubject("");
            setTopic("");
            setDuration("");
            setPriority("medium");
        }
    }

    function handleDelete(idx) {
        setItems(items.filter((_, i) => i !== idx));
    }

    function toggleComplete(idx) {
        setItems(items.map((item, i) => 
            i === idx ? { ...item, completed: !item.completed } : item
        ));
    }

    function handleEdit(idx, updatedFields) {
        setItems(items.map((item, i) => 
            i === idx ? { ...item, ...updatedFields } : item
        ));
    }

    return (
        <TodoContext.Provider value={{
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
            handleDelete,
            handleEdit,
            toggleComplete
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContext;
export { TodoProvider };