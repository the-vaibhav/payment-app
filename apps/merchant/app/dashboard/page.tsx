"use client"
import {
    ArrowDownCircle,
    ArrowUpCircle,
    ChevronDown,
    Clock,
    LogOut,
    Phone,
    QrCode,
    RefreshCcw,
    RotateCcw,
    Search,
    Store,
    Wallet,
} from 'lucide-react';
import React, { useState } from 'react';

function Dashboard() {
    const [balance, setBalance] = useState(124567.89);
    const [merchantDetails] = useState({
        name: "Sharma General Store",
        phone: "+91 98765 43210"
    });
    const [showDropdown, setShowDropdown] = useState(false);
    const [transactions, setTransactions] = useState([
        {
            id: 1,
            type: 'received',
            amount: 1200,
            from: 'John Doe',
            time: '2 minutes ago',
            status: 'completed',
            canRefund: true
        },
        {
            id: 2,
            type: 'refund',
            amount: 450,
            to: 'Sarah Smith',
            time: '1 hour ago',
            status: 'pending',
            canRefund: false
        },
        {
            id: 3,
            type: 'received',
            amount: 3400,
            from: 'Mike Johnson',
            time: '3 hours ago',
            status: 'completed',
            canRefund: true
        }
    ]);

    const handleRefund = (transactionId: number) => {
        setTransactions(transactions.map(transaction => {
            if (transaction.id === transactionId) {
                return {
                    ...transaction,
                    canRefund: false,
                    status: 'refund_pending'
                };
            }
            return transaction;
        }));
    };

    const handleLogout = () => {
        // Add logout logic here
        console.log('Logging out...');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
            {/* Header */}
            <header className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500 text-white p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                            <Wallet className="w-8 h-8" />
                        </div>
                        <h1 className="text-2xl font-bold">Tranzit</h1>
                    </div>
                    <div className="flex items-center space-x-4 relative">
                        <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg flex items-center backdrop-blur-sm transition-all"
                        >
                            <span className="mr-2">Merchant ID: 12345</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
                        </button>

                        {showDropdown && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden z-50">
                                <button
                                    onClick={handleLogout}
                                    className="w-full px-4 py-3 flex items-center space-x-2 text-gray-300 hover:bg-gray-700/50 transition-colors"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-6">
                {/* Balance Card */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg shadow-purple-500/10 p-6 mb-6 border border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 border-r border-gray-700">
                            <h2 className="text-gray-400 mb-2">Total Balance</h2>
                            <p className="text-3xl font-bold text-white">
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(balance)}
                            </p>
                        </div>
                        <div className="p-4 border-r border-gray-700">
                            <h2 className="text-gray-400 mb-2">Today's Received</h2>
                            <p className="text-3xl font-bold text-emerald-400">₹4,600</p>
                        </div>
                        <div className="p-4">
                            <h2 className="text-gray-400 mb-2">Today's Refunds</h2>
                            <p className="text-3xl font-bold text-rose-400">₹450</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* QR Code Section */}
                    <div className="col-span-1">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg shadow-purple-500/10 p-6 border border-gray-700">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-white">Payment QR</h2>
                                <RefreshCcw className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
                            </div>
                            <div className="flex justify-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                                <QrCode className="w-48 h-48 text-white" />
                            </div>
                            <div className="mt-4 p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Store className="w-4 h-4 text-gray-400" />
                                    <p className="text-white font-medium">{merchantDetails.name}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Phone className="w-4 h-4 text-gray-400" />
                                    <p className="text-gray-300">{merchantDetails.phone}</p>
                                </div>
                            </div>
                            <button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all">
                                Download QR
                            </button>
                        </div>
                    </div>

                    {/* Transactions Section */}
                    <div className="col-span-2">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg shadow-purple-500/10 p-6 border border-gray-700">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search transactions..."
                                        className="pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                                    />
                                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {transactions.map((transaction) => (
                                    <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors border border-gray-700">
                                        <div className="flex items-center space-x-4">
                                            {transaction.type === 'received' ? (
                                                <div className="p-2 bg-emerald-400/10 rounded-lg">
                                                    <ArrowDownCircle className="w-8 h-8 text-emerald-400" />
                                                </div>
                                            ) : (
                                                <div className="p-2 bg-rose-400/10 rounded-lg">
                                                    <ArrowUpCircle className="w-8 h-8 text-rose-400" />
                                                </div>
                                            )}
                                            <div>
                                                <p className="font-semibold text-white">
                                                    {transaction.type === 'received' ? transaction.from : transaction.to}
                                                </p>
                                                <div className="flex items-center text-sm text-gray-400">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    {transaction.time}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right flex items-center space-x-4">
                                            <div>
                                                <p className={`font-bold ${transaction.type === 'received' ? 'text-emerald-400' : 'text-rose-400'
                                                    }`}>
                                                    {transaction.type === 'received' ? '+' : '-'}₹{transaction.amount}
                                                </p>
                                                <span className={`text-sm px-2 py-1 rounded-full ${transaction.status === 'completed'
                                                    ? 'bg-emerald-400/10 text-emerald-400'
                                                    : transaction.status === 'refund_pending'
                                                        ? 'bg-blue-400/10 text-blue-400'
                                                        : 'bg-yellow-400/10 text-yellow-400'
                                                    }`}>
                                                    {transaction.status === 'refund_pending' ? 'Refund Pending' : transaction.status}
                                                </span>
                                            </div>
                                            {transaction.canRefund && (
                                                <button
                                                    onClick={() => handleRefund(transaction.id)}
                                                    className="flex items-center space-x-1 px-3 py-1 bg-rose-400/10 text-rose-400 rounded-lg hover:bg-rose-400/20 transition-colors"
                                                >
                                                    <RotateCcw className="w-4 h-4" />
                                                    <span>Refund</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;