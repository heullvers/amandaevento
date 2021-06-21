import './Inscricao.css';
import {Formik, Field, Form} from 'formik';
import schema from '../schema';

function Inscricao() {

  function onSubmit(values,actions){
    let name = values.name;
    let email = values.email;
  }

  return (
      <div className="container" id="inscricao">
        <div className="inscricao">
            <h1>Inscrição</h1>
            <Formik
            
            validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={{
              name: '',
              email: ''
            }}
            render={({values, errors})=> (
              <Form className="formulario">
                <label className={errors.name ? "custom-field three erroInput" : "custom-field three "}>
                    <Field type="text" placeholder="&nbsp;" name="name" />
                    <span className="placeholder">nome</span>
                    {errors.name && (<p className="error">{errors.name}</p>)}
                </label>
                <label className={errors.email ? "custom-field three erroInput" : "custom-field three "}>
                    <Field type="text" placeholder="&nbsp;" name="email"/>
                    <span className="placeholder">email</span>
                    {errors.email &&(<p className="error">{errors.email}</p>)}
                </label>
                <button className="botaoSubmit" type="submit">Inscrever-se</button>
              </Form>
            )}>
              
              
            </Formik>

            
            
        </div>
      </div>
      

  );
}

export default Inscricao;
