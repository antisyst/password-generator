import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { setPassword, setLength, setIncludeNumbers, setIncludeSymbols } from './store/passwordGeneratorSlice';

const PasswordGenerator: React.FC = () => {
  const dispatch = useDispatch();
  const password = useSelector((state: RootState) => state.passwordGenerator.password);
  const length = useSelector((state: RootState) => state.passwordGenerator.length);
  const includeNumbers = useSelector((state: RootState) => state.passwordGenerator.includeNumbers);
  const includeSymbols = useSelector((state: RootState) => state.passwordGenerator.includeSymbols);

  const handleGeneratePassword = () => {
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    dispatch(setPassword(generatedPassword));
  };

  return (
    <div className='container'>
      <h1 className='first-content animate__animated animate__bounceIn'>Password Generator</h1>
      <div>
        <label className='specs-attr length-child animate__animated animate__bounceIn'>Password Length:</label>
        <input
          type="number" className='animate__animated animate__bounceIn'
          value={length} min={0}
          onChange={(e) => dispatch(setLength(parseInt(e.target.value)))}
        />
      </div>
      <div>
        <label className='specs-attr animate__animated animate__bounceIn'>Include Numbers:</label>
        <label className="checkBox">
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => dispatch(setIncludeNumbers(e.target.checked))}
        />
          <div className="transition animate__animated animate__bounceIn" />
         </label>
      </div>
      <div>
        <label className='specs-attr '>Include Symbols:</label>
        <label className="checkBox">
        <input 
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => dispatch(setIncludeSymbols(e.target.checked))}
        />
          <div className="transition animate__animated animate__bounceIn" />
          </label>
      </div>
      <button className="shadow__btn animate__animated animate__bounceIn" onClick={handleGeneratePassword}>Generate Password</button>
      <div>
        <input type="text" className='result-action-state animate__animated animate__bounceIn' value={password} readOnly placeholder='Generated Password' />
      </div>
    </div>
  );
};

export default PasswordGenerator;