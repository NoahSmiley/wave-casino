//
//  ContentView.swift
//  waveCasino
//
//  Created by Keaton on 11/8/23.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            HomeView()
                .tabItem {
                    Image(systemName: "circle.square.fill")
                    Text("Home")
                }
            LiveView()
                .tabItem {
                    Image(systemName: "wineglass.fill")
                    Text("Live")
                }
            FlashView()
                .tabItem {
                    Image(systemName: "bolt.fill")
                    Text("Flash")
                }
            GamesView()
                .tabItem {
                    Image(systemName: "dice.fill")
                    Text("Games")
                }
            BalanceView()
                .tabItem {
                    Image(systemName: "dollarsign.square.fill")
                    Text("Balance")
                }
        }
    }
}

#Preview {
    ContentView()
}
