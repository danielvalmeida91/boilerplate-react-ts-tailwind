import { ArrowUpIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "./components/ui/field";

export function App() {
    const regras = z.object({
        nome: z.string(),
        // idade: z.string()
    })

    type TypeForm = z.infer<typeof regras>

    const formulario = useForm<TypeForm>({
        resolver: zodResolver(regras)
    });

    function enviaFormulario(dadosDoForm: TypeForm) {
        console.log('dados formulario', dadosDoForm)
    }

    console.log('erros', formulario.formState.errors)
    return (
        <>
            <form onSubmit={formulario.handleSubmit(enviaFormulario)} className="flex flex-col gap-8 max-w-72 border border-red-300">
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="ipt-nome">
                            Nome:
                        </FieldLabel>
                        <Input
                            id="ipt-nome"
                            placeholder="Digite o seu nome"
                            {...formulario.register('nome')}
                        />
                        <FieldError errors={[formulario.formState.errors.nome]} />
                    </Field>
                </FieldGroup>
                <Button>Enviar Formulário</Button>
            </form>
        </>
    )
}