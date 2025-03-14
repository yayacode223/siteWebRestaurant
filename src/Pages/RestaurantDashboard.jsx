import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    UtensilsCrossed,
    MapPin,
    Clock,
    Bell,
    Users,
    BarChart,
    Settings,
    LogOut,
    CreditCard,
    Star,
    Tag,
    Plus,
    Edit,
    Trash,
    ArrowRight,
    CheckCircle,
    ShoppingBasket,
    XCircle,
} from 'lucide-react';

export function RestaurantDashboard() {
    const [isRestaurantOpen, setIsRestaurantOpen] = useState(true); // État pour gérer l'ouverture/fermeture du restaurant
    const [promoCodes, setPromoCodes] = useState([
        { id: 1, code: 'SALE20', discount: '20%', validUntil: '2025-02-31', status: 'Actif' },
        { id: 2, code: 'FREE10', discount: '15%', validUntil: '2024-12-15', status: 'Expiré' },
    ]);

    const handleDeletePromoCode = (id) => {
        setPromoCodes(promoCodes.filter((code) => code.id !== id));
    };

    const toggleRestaurantStatus = () => {
        setIsRestaurantOpen(!isRestaurantOpen);
    };

    return (
        <div className="min-h-screen bg-neutral-50 font-sans">
            {/* Sidebar */}
            <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 hover:translate-x-0 -translate-x-full md:translate-x-0">
            <div className="flex items-center space-x-3 mb-8">
  <Link to="/"> {/* Redirige vers la page d'accueil */}
    <div className="flex items-center space-x-3 cursor-pointer">
      <UtensilsCrossed className="h-8 w-8 text-primary" />
      <h1 className="text-2xl font-bold text-red-600">IkaPlat</h1>
    </div>
  </Link>
</div>
                <nav className="space-y-2">
                    <Link
                        to="/dashboard"
                        className="flex items-center space-x-3 p-3 rounded-lg text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                        <BarChart className="h-5 w-5" />
                        <span>Tableau de bord</span>
                    </Link>
                    <Link
                        to="/orders"
                        className="flex items-center space-x-3 p-3 rounded-lg text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                        <ShoppingBasket className="h-5 w-5" />
                        <span>Commandes</span>
                    </Link>
                    <Link
                        to="/menu"
                        className="flex items-center space-x-3 p-3 rounded-lg text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                        <UtensilsCrossed className="h-5 w-5" />
                        <span>Menu</span>
                    </Link>
                    <Link
                        to="/customers"
                        className="flex items-center space-x-3 p-3 rounded-lg text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                        <Users className="h-5 w-5" />
                        <span>Clients</span>
                    </Link>
                    <Link
                        to="/promo-codes"
                        className="flex items-center space-x-3 p-3 rounded-lg text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                        <Tag className="h-5 w-5" />
                        <span>Codes Promo</span>
                    </Link>
                    <Link
                        to="/settings"
                        className="flex items-center space-x-3 p-3 rounded-lg text-neutral-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                        <Settings className="h-5 w-5" />
                        <span>Paramètres</span>
                    </Link>
                </nav>
                <div className="mt-8 border-t border-neutral-200 pt-6">
                    <button className="flex items-center space-x-3 p-3 rounded-lg text-neutral-700 hover:bg-accent/10 hover:text-accent transition-colors w-full">
                        <LogOut className="h-5 w-5" />
                        <span>Déconnexion</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="ml-0 md:ml-64 p-8 transition-all duration-300">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-neutral-800">Tableau de bord</h2>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleRestaurantStatus}
                            className={`px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${isRestaurantOpen
                                    ? 'bg-green-100 text-green-600 hover:bg-green-200'
                                    : 'bg-red-100 text-red-600 hover:bg-red-200'
                                }`}
                        >
                            {isRestaurantOpen ? (
                                <>
                                    <CheckCircle className="h-5 w-5" />
                                    <span>Restaurant ouvert</span>
                                </>
                            ) : (
                                <>
                                    <XCircle className="h-5 w-5" />
                                    <span>Restaurant fermé</span>
                                </>
                            )}
                        </button>
                        <button className="relative p-2 rounded-full hover:bg-neutral-100 transition-colors">
                            <Bell className="h-6 w-6 text-neutral-600" />
                            <span className="absolute top-0 right-0 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </button>
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Profile"
                            className="h-10 w-10 rounded-full cursor-pointer hover:scale-105 transition-transform"
                        />
                    </div>
                </div>

                {/* Restaurant Info */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-neutral-800">Commandes en cours</h3>
                        <button className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors">
                            <span>Voir tout</span>
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="space-y-4">
                        {/* Commande 1 */}
                        <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                            <div className="flex items-center space-x-4">
                                <UtensilsCrossed className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-medium text-neutral-800">Commande #12345</p>
                                    <p className="text-sm text-neutral-600">2x Poulet braisé, 1x Alloco</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                                    En préparation
                                </span>
                                <button className="text-primary hover:text-primary-dark transition-colors">
                                    <Edit className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Commande 2 */}
                        <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                            <div className="flex items-center space-x-4">
                                <UtensilsCrossed className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-medium text-neutral-800">Commande #12346</p>
                                    <p className="text-sm text-neutral-600">1x Thieboudienne, 2x Jus de bissap</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                                    Prête
                                </span>
                                <button className="text-primary hover:text-primary-dark transition-colors">
                                    <Edit className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center space-x-3 mb-4">
                            <ShoppingBasket className="h-6 w-6 text-primary" />
                            <h4 className="text-lg font-semibold text-neutral-800">Commandes aujourd'hui</h4>
                        </div>
                        <p className="text-3xl font-bold text-primary">56</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center space-x-3 mb-4">
                            <CreditCard className="h-6 w-6 text-primary" />
                            <h4 className="text-lg font-semibold text-neutral-800">Revenus aujourd'hui</h4>
                        </div>
                        <p className="text-3xl font-bold text-primary">250,000 FCFA</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center space-x-3 mb-4">
                            <Star className="h-6 w-6 text-primary" />
                            <h4 className="text-lg font-semibold text-neutral-800">Avis clients</h4>
                        </div>
                        <p className="text-3xl font-bold text-primary">4.5/5</p>
                    </div>
                </div>

                {/* Promo Codes Section */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-neutral-800">Codes Promo</h3>
                        <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                            <Plus className="h-5 w-5" />
                            <span>Créer un code promo</span>
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b border-neutral-200">
                                    <th className="py-2">Code</th>
                                    <th className="py-2">Réduction</th>
                                    <th className="py-2">Valide jusqu'au</th>
                                    <th className="py-2">Statut</th>
                                    <th className="py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {promoCodes.map((code) => (
                                    <tr key={code.id} className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
                                        <td className="py-3">{code.code}</td>
                                        <td className="py-3">{code.discount}</td>
                                        <td className="py-3">{code.validUntil}</td>
                                        <td className="py-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm ${code.status === 'Actif'
                                                        ? 'bg-green-100 text-green-600'
                                                        : 'bg-red-100 text-red-600'
                                                    }`}
                                            >
                                                {code.status}
                                            </span>
                                        </td>
                                        <td className="py-3">
                                            <div className="flex items-center space-x-4">
                                                <button className="text-primary hover:text-primary-dark transition-colors">
                                                    <Edit className="h-5 w-5" />
                                                </button>
                                                <button
                                                    className="text-accent hover:text-accent-dark transition-colors"
                                                    onClick={() => handleDeletePromoCode(code.id)}
                                                >
                                                    <Trash className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-neutral-800">Commandes récentes</h4>
                        <button className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors">
                            <span>Voir tout</span>
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b border-neutral-200">
                                    <th className="py-2">N° Commande</th>
                                    <th className="py-2">Client</th>
                                    <th className="py-2">Montant</th>
                                    <th className="py-2">Statut</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3].map((order) => (
                                    <tr key={order} className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
                                        <td className="py-3">#{12345 + order}</td>
                                        <td className="py-3">Client {order}</td>
                                        <td className="py-3">15,000 FCFA</td>
                                        <td className="py-3">
                                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                                Livré
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}