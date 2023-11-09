//
//  HomeView.swift
//  waveCasino
//
//  Created by Keaton on 11/8/23.
//

import SwiftUI

struct HomeView: View {
    var body: some View {
        VStack {
            header
            Spacer()
            Image(systemName: "suit.spade.fill")
                .resizable()
                .padding()
                .overlay(RoundedRectangle(cornerRadius: 10).stroke(.white, lineWidth: 5))
                .frame(width: 100, height: 125)
            Spacer()
        }
    }
    
    private var header: some View {
        HStack(spacing: 10) {
            Spacer()
            HStack(spacing: 35) {
                Image(systemName: "person.fill")
                VStack {
                    Image(systemName: "wineglass.fill")
                    Text("Live")
                        .font(.caption)
                }
            }
            Spacer()
                .frame(width: 10)
            Image(systemName: "circle.square.fill")
            Spacer()
                .frame(width: 5)
            HStack(spacing: 20) {
                VStack {
                    Image(systemName: "dice.fill")
                    Text("Games")
                        .font(.caption)
                }
                VStack {
                    Text("$78.00")
                        .foregroundStyle(.green)
                    Text("Balance")
                        .font(.caption)
                }
            }
            Spacer()
        }
    }
}

#Preview {
    HomeView()
}
