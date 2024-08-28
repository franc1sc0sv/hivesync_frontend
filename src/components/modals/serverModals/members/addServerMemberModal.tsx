import { ModalTemplate } from "../../ModalTemplate";

import { SearchBar } from "../../../forms/Inputs/SearchBar";
import { useCustomForm } from "../../../../hooks/useForm";
import { SubmitButton } from "../../../forms/Inputs/Button";

// import { UserBox } from "../../../fakePages/user/friends/Components/UserBox";

export const AddServerMembersModal: React.FC = () => {
  return (
    <ModalTemplate identificator="addServerMembers">
      <AddMembers />
    </ModalTemplate>
  );
};

const AddMembers: React.FC = () => {
  return (
    <section className="flex flex-col w-full h-full gap-10 my-10">
      <Form />
    </section>
  );
};

const Form = () => {
  const api = () => console.log("hola, *llama a la api épicamente*");
  const success = () => console.log("success");

  const { onSubmit, register, isLoading } = useCustomForm(api, success, "");
  7;

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-between w-full gap-10 h-4/5"
    >
      <p className="text-2xl text-center text-custom_white">
        Agregar miembros al servidor
      </p>
      <div className="mx-auto flex flex-col items-center w-[320px] gap-5">
        <SearchBar
          name="username"
          register={register}
          placeholder="Busca un nombre de usuario"
        />

        {/* <User data={data} /> */}
      </div>

      <div className="flex flex-col items-end justify-end w-full h-full py-10 md:p-0 ">
        <SubmitButton text="Buscar" isLoading={isLoading} />
      </div>
    </form>
  );
};

// const User = ({ data }: { data: UserProfile }) => {
//   if (!data) return;
//   if (!data.id) return <NoResults />;
//   return (
//     <UserBox
//       id={data.id_user}
//       isFromFriends
//       avatarURL={data.profileUrl}
//       username={data.username}
//     />
//   );
// };

// const NoResults = () => {
//   return (
//     <div className="flex items-start w-full">
//       <p className="text-sm text-red-500 font-amiko">
//         Ups al parecer hubo un error al encontrar este usuario
//       </p>
//     </div>
//   );
// };
