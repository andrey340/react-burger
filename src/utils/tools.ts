export const checkResponse = (res: any) => {
    if (res.ok || res.status === 401 || res.status === 403) {
      return res.json();
    }
    // не забываем выкидывать ошибку, чтобы она попала в `catch`
    return Promise.reject(`Ошибка ${res.status}`);
  };


export function russianStatus(status: string) {
    let statusRus = '';
    switch (status) {
        case 'done':
            statusRus = 'Выполнен'
            break;
        case 'created':
            statusRus = 'Создан'
            break;
        case 'pending':
            statusRus = 'Готовится'
            break;

        default:
            statusRus = status;
    }
    return statusRus
}