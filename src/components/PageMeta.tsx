import React from "react";
import { client } from "client";
import { PageIdType } from "@faustjs/core/client";

interface PageProps {
  children?: any;
  uri: string;
}
const PageMeta = ({ children, uri, ...props }: PageProps) => {
  const page = client.usePage({
    id: uri ?? "",
    idType: PageIdType.URI,
  });

  const contacto = page?.contacto;
  const recursos = page?.datosRecursos?.relacion?.map(
    (item) => item.$on.Recurso
  );

  const propiedades = {
    ...props,
    contacto,
    recursos,
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...propiedades,
          });
        }
        return child;
      })}
    </>
  );
};

export default PageMeta;
