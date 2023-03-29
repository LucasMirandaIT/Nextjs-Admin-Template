import { WarningIcon } from "@/components/icons";
import Input from "@/components/Input";
import useAuth from "@/data/hook/useAuth";
import Image from "next/image";
import { useEffect, useState } from "react";

const Login = () => {
    const [error, setError] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [mode, setMode] = useState('login');

    const { login, signUp, loginGoogle } = useAuth();

    const submit = async () => {
        mode === 'login' ? await login(email, password) : await signUp(email, password)

    };

    const validateEmail = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        if ((email.length > 0 && !email.match(emailRegex))) {
            setError('E-mail inválido');
        } else {
            setError('');
        }
    };

    const validatePassword = () => {
        if ((password.length > 0 && password.length < 8)) {
            setError('Senha inválida. Digite no mínimo 8 caracteres');
        } else {
            setError('');
        }
    };

    const showError = (msg: string, time = 5) => {
        setError(msg);
        setTimeout(() => {
            setError('');
        }, time * 1000);
    }

    return (
        <section className="flex w-screen">
            <div className="hidden md:block w-1/2 lg:2/3">
                <img src="https://source.unsplash.com/random" alt="Imagem da tela de autenticação" className="h-screen w-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 lg:1/3 flex flex-col h-screen items-center justify-center px-10">
                <h1 className="text-2xl font-bold mb-5">
                    {mode === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na Plataforma'}
                </h1>

                {error && (
                    <div className={`flex bg-red-400 text-white py-4 my-2 px-5 w-full rounded-lg border border-red-700`}>
                        <WarningIcon />
                        <span className="ml-5"> {error} </span>
                    </div>
                )}

                <Input label="Email" onBlur={validateEmail} type="email" required value={email} onChange={(value) => setEmail(value)} />
                <Input label="Senha" onBlur={validatePassword} type="password" required value={password} onChange={(value) => setPassword(value)} />

                <button className="w-full bg-indigo-500 text-white rounded-lg px-4 py-3 mt-6 hover:bg-indigo-400" onClick={submit}>
                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button className="w-full bg-red-500 text-white rounded-lg px-4 py-3 hover:bg-red-400" onClick={loginGoogle}>
                    {mode === 'login' ? 'Entrar' : 'Cadastrar-se'} com Google
                </button>

                {mode === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui? &nbsp;
                        <a className="text-blue-500 hover: text-blue-700 font-semibold cursor-pointer" onClick={() => setMode('cadastro')}>
                            Crie uma conta gratuitamente
                        </a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já possui uma conta? &nbsp;
                        <a className="text-blue-500 hover: text-blue-700 font-semibold cursor-pointer" onClick={() => setMode('login')}>
                            Faça login
                        </a>
                    </p>
                )}
            </div>
        </section>
    );
};

export default Login;