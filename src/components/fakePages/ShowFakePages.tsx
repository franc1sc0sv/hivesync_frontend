import FakePageTemplate from "./FakePageTemplate";
import useFakePages from "../../store/useFakePage";

export const ShowFakePages: React.FC = () => {
  const { fakePages, removeFakePage } = useFakePages();
  return (
    <>
      {fakePages.map((page) => (
        <FakePageTemplate
          key={page.id}
          isOpen={true}
          onClose={() => removeFakePage(page.id)}
          index={page.id}
          title={page.title}
          children={page.children}
        />
      ))}
    </>
  );
};
