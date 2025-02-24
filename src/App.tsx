import { Button, Input } from "antd";

function App() {
  return (
    <form className="mx-auto mt-12 flex w-[600px] flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">My To-do's</h1>
      <em className="text-neutral-400">10 tasks remaining</em>
      <div className="flex gap-4">
        <Input placeholder="Create another task" />
        <Button type="primary">Add</Button>
      </div>
    </form>
  );
}

export default App;
