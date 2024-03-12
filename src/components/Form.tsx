function Form({ handleInput, name }: { name: string,
  handleInput: (p:string, pp: 'email' | 'password' | 'nickName', ppp: string) => void }) {
  return (
    <form className="absolute bg-blue-100 w-[70%] h-[70%] flex flex-col justify-center">
      <input
        type="text"
        name={ name }
        onChange={ (e) => handleInput(e.target.name, 'email', e.target.value) }
      />
      <input
        type="password"
        name={ name }
        onChange={ (e) => handleInput(e.target.name, 'nickName', e.target.value) }
      />
      <input
        type="password"
        name={ name }
        onChange={ (e) => handleInput(e.target.name, 'password', e.target.value) }
      />
      <button>{name === 'login' ? 'Logar' : 'Cadastrar'}</button>
    </form>
  );
}

export default Form;
