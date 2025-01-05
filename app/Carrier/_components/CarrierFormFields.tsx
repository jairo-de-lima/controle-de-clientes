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

interface CarrierFormFieldsProps {
  control: Control<FieldValues>;
}

export const CarrierFormFields: React.FC<CarrierFormFieldsProps> = ({
  control,
}) => (
  <>
    <FormField
      control={control}
      name="transportadora"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Transportadora</FormLabel>
          <FormControl>
            <Input placeholder="Transportadora" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={control}
      name="documento"
      render={({ field }) => (
        <FormItem>
          <FormLabel>CNPJ</FormLabel>
          <FormControl>
            <Input placeholder="CNPJ" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);
