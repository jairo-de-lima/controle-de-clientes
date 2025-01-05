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

interface AddressFormFieldsProps {
  control: Control<FieldValues>;
}

export const AddressFormFields: React.FC<AddressFormFieldsProps> = ({
  control,
}) => (
  <>
    <FormField
      control={control}
      name="endereco"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Endereço</FormLabel>
          <FormControl>
            <Input placeholder="Endereço" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={control}
      name="cidade"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Cidade</FormLabel>
          <FormControl>
            <Input placeholder="Cidade" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={control}
      name="estado"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Estado</FormLabel>
          <FormControl>
            <Input placeholder="Estado" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={control}
      name="bairro"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Bairro</FormLabel>
          <FormControl>
            <Input placeholder="Bairro" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);
