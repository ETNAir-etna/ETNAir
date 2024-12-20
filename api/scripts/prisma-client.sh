#!/bin/bash

echo "🧹 Suppression des dépendances Prisma..."
npm uninstall @prisma/client prisma

echo "🔄 Régénération du client Prisma..."
npx prisma generate

echo "✅ Nettoyage et régénération terminés !"
