import React from "react";
import { Control, FieldValues } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../_components/ui/form";
import { Input } from "../../_components/ui/input";

interface ContactFormFieldsProps {
  control: Control<FieldValues>;
}

export const ContactFormFields: React.FC<ContactFormFieldsProps> = ({
  control,
}) => (
  <>
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>E-mail</FormLabel>
          <FormControl>
            <Input placeholder="E-mail" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={control}
      name="celular"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Celular</FormLabel>
          <FormControl>
            <Input placeholder="Celular" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={control}
      name="telefoneResidencial"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Telefone Residencial</FormLabel>
          <FormControl>
            <Input placeholder="Telefone Residencial" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);
