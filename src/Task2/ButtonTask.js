import React from 'react';
import ButtonInline from './ButtonInline';
import ButtonModule from './ButtonModule';
import StyledButton from './StyledButton';

const ButtonTask = () => {
    const handleInlineClick = () => {
        console.log('Inline button clicked');
    };

    const handleModuleClick = () => {
        console.log('Module button clicked');
    };

    const handleStyledClick = () => {
        console.log('Styled button clicked');
    };

    return (
        <div>
            <h2>Button Examples</h2>
            <ButtonInline label="Inline Button" onClick={handleInlineClick} />
            <ButtonModule label="Module Button" onClick={handleModuleClick} />
            <StyledButton label="Styled Button" onClick={handleStyledClick} />
        </div>
    );
};

export default ButtonTask;
