"use client";

import * as React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

export function MDXContent({ code }: { code: string }) {
  // получаем компонент из code
  const Component = useMDXComponent(code);

  // храним тип компонента, устанавливаем ОДИН РАЗ на маунт
  const [Rendered, setRendered] = React.useState<React.ComponentType | null>(
    null
  );

  React.useEffect(() => {
    setRendered(() => Component);
    // Важно: зависимостей нет — берём первоначальное значение.
    // Наши MDX "code" на странице поста не меняется.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!Rendered) return null;
  return <Rendered />;
}
