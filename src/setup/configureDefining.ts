import { MessageDescriptor } from "react-intl";

const defaultMessage = {
  id: "123123",
  defaultMessage: "Nothing found",
};

export function defineSaveMessages<
  K extends keyof unknown,
  T = MessageDescriptor,
  U extends Record<K, T> = Record<K, T>
>(msgs: U): U {
  const proxy = new Proxy(msgs, {
    get(target, prop, receiver) {
      const result = Reflect.get(target, prop, receiver);

      return result || defaultMessage;
    },
  });
  return proxy;
}
