"use client"
import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    ShieldCheck,
    Smartphone,
    Wallet,
    Zap,
} from 'lucide-react';
import React, { useState } from 'react';

function Marketing() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    const features = [
        {
            icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
            title: "Secure Payments",
            description: "Enterprise-grade security with end-to-end encryption for all transactions"
        },
        {
            icon: <Zap className="w-6 h-6 text-indigo-400" />,
            title: "Instant Transfers",
            description: "Real-time payment processing with immediate settlement to your account"
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
            title: "Analytics Dashboard",
            description: "Comprehensive insights into your business performance and customer behavior"
        },
        {
            icon: <Smartphone className="w-6 h-6 text-indigo-400" />,
            title: "Mobile Ready",
            description: "Accept payments anywhere with our mobile-optimized QR codes"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
            {/* Header */}
            <header className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500 text-white">
                <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                            <Wallet className="w-8 h-8" />
                        </div>
                        <h1 className="text-2xl font-bold">Tranzit</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsLoginModalOpen(true)}
                            className="px-4 py-2 text-white hover:text-indigo-200 transition-colors"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsSignupModalOpen(true)}
                            className="px-6 py-2 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                        >
                            Sign Up as Merchant
                        </button>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                    <h1 className="text-5xl font-bold mb-6">
                        Accept Payments <span className="text-indigo-200">Seamlessly</span>
                    </h1>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Transform your business with our modern payment solution. Quick setup, instant transfers, and comprehensive analytics.
                    </p>
                    <button
                        onClick={() => setIsSignupModalOpen(true)}
                        className="px-8 py-3 bg-white text-indigo-600 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center space-x-2"
                    >
                        <span>Get Started Now</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                    Everything You Need to Grow Your Business
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-colors"
                        >
                            <div className="p-3 bg-indigo-500/10 rounded-lg w-fit mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="max-w-7xl mx-auto px-4 py-20 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
                        <p className="text-4xl font-bold text-indigo-400 mb-2">₹100M+</p>
                        <p className="text-gray-400">Processed Monthly</p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
                        <p className="text-4xl font-bold text-indigo-400 mb-2">50,000+</p>
                        <p className="text-gray-400">Happy Merchants</p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
                        <p className="text-4xl font-bold text-indigo-400 mb-2">99.99%</p>
                        <p className="text-gray-400">Uptime</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of merchants who trust Tranzit for their payment needs. Get started in minutes.
                    </p>
                    <button
                        onClick={() => setIsSignupModalOpen(true)}
                        className="px-8 py-3 bg-white text-indigo-600 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors"
                    >
                        Start Accepting Payments
                    </button>
                </div>
            </section>

            {/* Login Modal */}
            {isLoginModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 w-full max-w-md">
                        <h2 className="text-2xl font-bold text-white mb-6">Welcome Back</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all"
                            >
                                Login
                            </button>
                        </form>
                        <button
                            onClick={() => setIsLoginModalOpen(false)}
                            className="mt-4 text-gray-400 hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Signup Modal */}
            {isSignupModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 w-full max-w-md">
                        <h2 className="text-2xl font-bold text-white mb-6">Create Merchant Account</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-400 mb-2">Business Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                                    placeholder="Enter your business name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 mb-2">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                                    placeholder="Create a password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all"
                            >
                                Create Account
                            </button>
                        </form>
                        <button
                            onClick={() => setIsSignupModalOpen(false)}
                            className="mt-4 text-gray-400 hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Marketing;