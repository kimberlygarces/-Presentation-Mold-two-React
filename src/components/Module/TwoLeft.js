import React from 'react';
import '../../style/ModuleGeneral.scss'
import '../../style/ModuleTwoLeft.scss'
import ModuleLeftContent from '../content/ModuleTwoLeft';


class ModuleLeft extends React.Component {
    state = {
        title: 'DIMENSIONES ESTRUCTURALES', 
        TextOne: 'Pausa que realiza en entrevistador para que el entrevistado lo libremente contar su relato sin interupciones',
        TextTwo: 'Pausa que realiza en entrevistador para que el entrevistado lo libremente contar su relato sin interupciones',

    }
        render(){               
        return(
            <div className="ModuleTwoLeft">
                <ModuleLeftContent ModuleLeft={this.state}/>
            </div>

        )
    }
}

export default ModuleLeft;