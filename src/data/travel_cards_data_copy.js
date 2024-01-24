// src\data\travel_cards_data.js

const travelData = [
  {
    id: 1,
    title: "смотреть на камни с девочками",
    TravelCardImg:
      "https://img-fotki.yandex.ru/get/6403/137106206.93/0_8ac31_91474922_orig.jpg",
    startDate: "20.10.2025",
    endDate: "20.10.2024",
    routes: [],
  },
];

const addTravelCard = (cardId, cardTitle) => {
  console.log("addTravelCard: ", cardId, cardTitle);
  const newTravelCard = {
    id: cardId,
    title: cardTitle,
    routes: [],
  };
  travelData.push(newTravelCard);
};

const updateTravelCardData = (updatedCard) => {
  const cardIndex = travelData.findIndex((card) => card.id === updatedCard.id);

  if (cardIndex !== -1) {
    // Копируем существующий объект карточки
    const existingCard = { ...travelData[cardIndex] };

    // Используем Set для уникальных маршрутов
    const uniqueRoutes = new Set([
      ...existingCard.routes,
      ...updatedCard.routes,
    ]);

    // Преобразуем Set обратно в массив
    existingCard.routes = [...uniqueRoutes];

    // Заменяем старую карточку на обновленную
    travelData[cardIndex] = existingCard;
  }
};

const deleteRouteFromTravelCard = (cardId, routeIdToDelete) => {
  const cardIndex = travelData.findIndex((card) => card.id === cardId);

  if (cardIndex !== -1) {
    // Копируем существующий объект карточки
    const existingCard = { ...travelData[cardIndex] };

    // Фильтруем массив маршрутов, оставляя только те, которые не нужно удалять
    existingCard.routes = existingCard.routes.filter(
      (route) => route.routeId !== routeIdToDelete
    );

    // Заменяем старую карточку на обновленную
    travelData[cardIndex] = existingCard;
  }
};

export {
  travelData,
  updateTravelCardData,
  deleteRouteFromTravelCard,
  addTravelCard,
};
