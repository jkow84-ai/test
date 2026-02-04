import { useState } from "react";

export default function App() {
  const [option, setOption] = useState("A");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Wybierz opcję</h1>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="option"
              value="A"
              checked={option === "A"}
              onChange={() => setOption("A")}
            />
            Opcja A
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="option"
              value="B"
              checked={option === "B"}
              onChange={() => setOption("B")}
            />
            Opcja B
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="option"
              value="C"
              checked={option === "C"}
              onChange={() => setOption("C")}
            />
            Opcja C
          </label>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          Aktualny wybór: <strong>{option}</strong>
        </div>
      </div>
    </div>
  );
}
