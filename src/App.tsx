import Button from "./components/ui/Button";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-2 items-center">
        <Button>Button</Button>
        <Button size="lg">Button Large</Button>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Button variant="secondary" className="secondary">
          Button
        </Button>
        <Button size="lg" variant="secondary" className="secondary">
          Button Large
        </Button>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Button variant="ghost" className="secondary">
          Button
        </Button>
        <Button size="lg" variant="ghost" className="secondary">
          Button Large
        </Button>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Button variant="outline" className="secondary">
          Button
        </Button>
        <Button size="lg" variant="outline" className="secondary">
          Button Large
        </Button>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Button variant="muted" className="secondary">
          Button
        </Button>
        <Button size="lg" variant="muted" className="secondary">
          Button Large
        </Button>
      </div>
    </MainLayout>
  );
}

export default App;
