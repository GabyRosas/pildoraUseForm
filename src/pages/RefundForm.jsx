import React from 'react';
import { useForm } from 'react-hook-form';

const RefundForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Recup de la data
    alert('Formulario enviado con éxito');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '500px', margin: '0 auto' }}className=" h-full w-full max-w-2xl p-4 rounded-[20px] bg-[color:var(--col-bg-accent)]">
      <div>
        <label htmlFor="name">Nombre</label>
        <input 
          id="name" 
          {...register('name', { required: 'El nombre es requerido' })} 
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <input 
          id="email" 
          type="email" 
          {...register('email', { required: 'El correo electrónico es requerido' })} 
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="transactionId">ID de Transacción</label>
        <input 
          id="transactionId" 
          {...register('transactionId', { required: 'El ID de la transacción es requerido' })} 
          />
        {errors.transactionId && <p>{errors.transactionId.message}</p>}
      </div>

      <div>
        <label htmlFor="reason">Razón del Reembolso</label>
        <select 
          id="reason" 
          {...register('reason', { required: 'La razón del reembolso es requerida' })} 
        >
          <option value="">Seleccione una razón</option>
          <option value="option1">Hice esta compra por accidente</option>
          <option value="option2">Ya no quiero el artículo de esta compra</option>
          <option value="option3">Hice la compra pero no recibí el artículo</option>
          <option value="option4">El artículo está defectuoso o no funciona según lo previsto</option>
          <option value="option5">Un amigo o un miembro de mi familia hizo la compra sin mi consentimiento</option>
          <option value="option6">No reconozco esta compra o este importe</option>
        </select>
        {errors.reason && <p>{errors.reason.message}</p>}
      </div>

      <button  className={`block bg-[color:var(--col-primary)] text-[white] w-[280px] h-[50px] text-base cursor-pointer rounded-[10px] border-[none] transition-opacity duration-[0.3s] ease-[ease] hover:opacity-80`} type="submit">Enviar Solicitud de Reembolso</button>
    </form>
  );
};

export default RefundForm;