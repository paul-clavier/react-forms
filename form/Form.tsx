import { useReducer } from "react";
import { FormProvider } from "./form.context";
import { reducer } from "./form.reducer";
import { INITIAL_STATE } from "./initialState";
import PersonalDetails from "./components/PersonalDetails";

const Form = ({}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleChange = (name: any, newValue: any) => {
    //const error = validateInput(name, newValue);
    const error = null;
    dispatch({
      key: name,
      payload: { newValue, error },
    });
  };

  const submitForm = () => {
    console.log("Great job !");
  };

  return (
    <form onSubmit={submitForm}>
      <FormProvider value={{ state, handleChange }}>
        <PersonalDetails />
        {/* <AddressDetails />
        <ContactDetails />
        <SubmitForm /> */}
      </FormProvider>
    </form>
  );
};

export default Form;
