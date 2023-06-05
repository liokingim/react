import React from 'react';
import { useForm } from 'react-hook-form';

export default function BankForm() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
        // post request를 여기서 수행하세요.
        // 예: axios.post('/api/bank', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="depositorName" ref={register({ required: true })} placeholder="입금자명" />
            {errors.depositorName && <span>입금자명은 필수 항목입니다.</span>}

            <input name="bankName" ref={register({ required: true })} placeholder="은행명" />
            {errors.bankName && <span>은행명은 필수 항목입니다.</span>}

            <input name="bankBranchName" ref={register({ required: true })} placeholder="은행지점명" />
            {errors.bankBranchName && <span>은행지점명은 필수 항목입니다.</span>}

            <label>
                <input type="radio" value="ordinary" name="depositType" ref={register({ required: true })} />
                보통
            </label>
            <label>
                <input type="radio" value="current" name="depositType" ref={register({ required: true })} />
                당좌
            </label>
            {errors.depositType && <span>입금종별은 필수 항목입니다.</span>}

            <input type="submit" />
        </form>
    );
}